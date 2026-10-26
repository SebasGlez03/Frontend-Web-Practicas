import { useEffect, useState } from "react";
import { traerProductos } from "../servicios/tienda";
import type { Producto } from "../datos";

export function useProductos() {
	// Aqui recibe los 3 estados de cada peticion (Cargando, Error y Datos)
	const [productos, setProductos] = useState<Producto[]>([]);
	const [cargando, setCargando] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [intento, setIntento] = useState(0);

	// Use efect se utiliza para traer datos de fuera de la aplicacion
	useEffect(() => {
		let vigente = true;

		traerProductos()
			// 1. `then` se ejecuta cuando la peticion finaliza correctamente.
			.then((lista) => {
				if (vigente) setProductos(lista);
			})
			// 2. `catch` se ejecuta si se encuentra un error durante la peticion.
			.catch(() => {
				if (vigente) setError("No se pudo conectar a la tienda");
			})
			// 3. `finally` ocurre siempre al terminar la peticion, independientemente de lo que suceda.
			.finally(() => {
				if (vigente) setCargando(false);
			});

		return () => {
			vigente = false;
		};
	}, [intento]); // Si intento cambia de valor, el metodo `useEffect()` se volvera a utilizar para intentar traer nuevamente los productos.

	function reintentar() {
		setCargando(true); // Vuelve a mostrar el cargando
		setError(null); // Lo manda en nulo para que no tenga nada guardado y pueda mostrar errores en caso de que ocurran.
		setIntento((i) => i + 1); // El valor del intento se actualiza con esta funcion.
	}

	return {
		productos,
		cargando,
		error,
		reintentar,
	};
}
