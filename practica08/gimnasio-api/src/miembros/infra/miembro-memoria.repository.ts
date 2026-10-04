import { Injectable } from "@nestjs/common";
import { ActualizarMiembro, Miembro, NuevoMiembro } from "src/dominio/entidades";
import { MiembroRepository } from "src/dominio/miembros.repository";

@Injectable()
export class MiembroMemoriaRepository implements MiembroRepository {
    private miembros: Miembro[] = [];
    private siguienteId = 1;

    async listar(): Promise<Miembro[]> {
        return this.miembros;
    }

    async buscarPorId(id: number): Promise<Miembro | null> {
        return this.miembros.find((m) => m.id === id) ?? null;
    }

    async crear(datos: NuevoMiembro): Promise<Miembro> {
        const nuevo: Miembro = {
            id: this.siguienteId++,
            activo: true,
            correo: datos.correo,
            membresia: datos.membresia,
            nombre: datos.nombre

        };
        this.miembros.push(nuevo);
        return nuevo;
    }

    async actualizar(id: number, datos: ActualizarMiembro): Promise<Miembro> {
        const index = this.miembros.findIndex((m) => m.id === id)
        if (index === -1) {
            throw new Error(`Miembro con ${id} no encontrado`);
        }
        this.miembros[index] = {...this.miembros[index], ...datos}
        return this.miembros[index];
    }

    async eliminar(id: number) {
        const index = this.miembros.findIndex((m) => m.id === id)
        if (index !== -1) {
            this.miembros.splice(index, 1)
        }
    }

}