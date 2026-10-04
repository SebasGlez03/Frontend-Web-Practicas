import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Patch, Post, Res } from '@nestjs/common';
import { MiembrosService } from './miembros.service';
import { aMiembro } from './dto/miembro-respuesta.dto';
import type { Response } from 'express';
import type { CrearMiembroDto } from './dto/crear-miembro.dto';
import type { ActualizarMiembro } from 'src/dominio/entidades';

@Controller('miembros')
export class MiembrosController {
  constructor(private readonly servicio: MiembrosService) {}

  @Get()
  async listar() {
    const lista = await this.servicio.listar();
    return lista.map(aMiembro)
  }

  @Get(":id")
  async buscar(@Param('id') id: number) {
    const miembro = await this.servicio.buscar(Number(id));
    if (!miembro) {
      throw new NotFoundException(`No se encontro el miembro con id ${id}`);
    }
    return aMiembro(miembro);
  }

  @Post()
  @HttpCode(201)
  async crear(@Body() dto:CrearMiembroDto, @Res({ passthrough: true }) res: Response) {
    try {
      const miembro = await this.servicio.crear(dto);
      res.setHeader("Location", `/miembros/${miembro.id}`);
      return aMiembro(miembro);
    } catch (error) {
      if (error instanceof Error)
      throw new Error(error.message);
    }
  }

  @Patch(":id")
  async actualizar(@Param('id') id: number, @Body() dto: ActualizarMiembro) {
    const miembro = await this.servicio.actualizar(Number(id), dto)
    if (!miembro) {
      throw new NotFoundException(`No se ha encontrado el miembro con id ${id}`);
    }
    return aMiembro
  }

  
  @Delete(":id")
  async eliminar(@Param('id') id: number) {
    const miembro = await this.servicio.buscar(Number(id));
    if (!miembro) {
      throw new NotFoundException(`No se ha encontrado el miembro con id ${id}`);
    }
    await this.servicio.eliminar(Number(id))
  }
  
}
