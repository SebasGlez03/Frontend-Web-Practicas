import { Miembro } from "src/dominio/entidades";

export interface MiembroResponseDto {
    id: number;
    nombre: string;
    correo: string;
    membresia: string;
    activo: boolean;
}

export function aMiembro(m: Miembro): MiembroResponseDto {
    return {
        id: m.id,
        nombre: m.nombre,
        correo: m.correo,
        membresia: m.membresia,
        activo: m.activo
    }
}