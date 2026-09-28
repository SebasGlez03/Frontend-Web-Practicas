import { Inject, Injectable } from '@nestjs/common';
import { MIEMBROS_REPOSITORY } from './miembros.tokens';
import type { MiembroRepository } from 'src/dominio/miembros.repository';
import { ActualizarMiembro, Miembro } from 'src/dominio/entidades';
import { CrearMiembroDto } from './dto/crear-miembro.dto';

@Injectable()
export class MiembrosService {
    constructor(
        @Inject(MIEMBROS_REPOSITORY)
        private readonly repo: MiembroRepository) {}

        listar(): Promise<Miembro[]> {
            return this.repo.listar();
        }

        buscar(id: number): Promise<Miembro | null> {
            return this.repo.buscarPorId(id)
        }

        crear(dto: CrearMiembroDto): Promise<Miembro> {
            return this.repo.crear({activo: true, correo: dto.correo, membresia: dto.membresia, nombre: dto.nombre});
        }

        actualizar(id: number, dto: ActualizarMiembro): Promise<Miembro> {
            return this.repo.actualizar(id, dto)
        }

        eliminar(id: number) {
            return this.repo.eliminar(id)
        }
}
