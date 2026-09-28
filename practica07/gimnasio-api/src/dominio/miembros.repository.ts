import { ActualizarMiembro, Miembro, NuevoMiembro } from "./entidades";

export interface MiembroRepository {
    listar(): Promise<Miembro[]>;
    buscarPorId(id: number): Promise<Miembro | null>;
    crear(datos: NuevoMiembro): Promise<Miembro>;
    actualizar(id: number, datos: ActualizarMiembro): Promise<Miembro>;
    eliminar(id: number);
}