type EstadoPrestamo = 'activo' | 'devuelto' | 'vencido';
interface Prestamo {
    multa: number;
    ejemplar: number;
    estado: EstadoPrestamo;
    socio?: string;
}

function calcularMulta(prestamo: Prestamo): number {
    const cargoFijo = 50;
    return prestamo.multa + cargoFijo;
};

function reciboDe(prestamo: Prestamo): string {
    if (prestamo.socio === undefined) {
        return 'Recibo de socio no registrado';
    }
    return `Recibo para ${prestamo.socio}`;
}

const prestamo: Prestamo = {
    multa: 350,
    ejemplar: 14,
    estado: 'vencido',
    socio: 'Juan Pérez'
};

console.log(calcularMulta(prestamo));
console.log(reciboDe(prestamo));

// console.log(calcularMulta("hola"));
// console.log(calcularMulta({ multa: 350, ejemplar: 14 }));
// console.log(calcularMulta({ multa: '350', ejemplar: 14, estado: 'activo' }));