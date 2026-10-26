import { useState } from "react";
import { productos, type Producto } from "./datos";
import { Layout } from "./Layout";
import { Encabezado } from "./Encabezado";
import { PiePagina } from "./PiePagina";
import { Filtro } from "./Filtro";
import { Catalogo } from "./Catalogo";
import { Cargando } from "./Cargando";
import { MensajeError } from "./MensajeError";
import { useProductos } from "./hooks/useProductos";
import { crearPedido } from "./servicios/tienda";
import { FormularioPago } from "./FormularioPago";

// Solo App puede hacer `variable++` o cambiar variables, el resto de componentes son solo lectura
export default function App() {
	// Estados
	const { productos, cargando, error, reintentar } = useProductos();
	const [categoria, setCategoria] = useState("todas");
	const [carrito, setCarrito] = useState<Producto[]>([]);
	const [folio, setFolio] = useState<string | null>(null);

	// Derivados
	const categorias = ["todas", ...new Set(productos.map((p) => p.categoria))];
	const visibles =
		categoria === "todas"
			? productos
			: productos.filter((p) => p.categoria === categoria);
	const total = carrito.reduce((suma, p) => suma + p.precio, 0);

	// Evento
	function agregar(producto: Producto) {
		setCarrito((anterior) => [...anterior, producto]);
	}

	async function pagar(correo: string, telefono: string) {
		const pedido = await crearPedido({
			correo,
			telefono,
			productos: carrito.map((p) => p.id),
		});
		setFolio(pedido.folio);
		setCarrito([]);
		reintentar();
	}

	return (
		<Layout
			encabezado={<Encabezado piezas={carrito.length} />}
			pie={<PiePagina piezas={carrito.length} total={total} />}
		>
			<section className="portada">
				<h1>Catalogo de temporada</h1>
				<p>{visibles.length} productos disponibles</p>
				{cargando && <Cargando />}
				{error && <MensajeError mensaje={error} onReintentar={reintentar} />}
				{!cargando && !error && (
					<>
						<Filtro
							categoria={categorias}
							activa={categoria}
							onCambiar={setCategoria}
						/>
						<Catalogo productos={visibles} onAgregar={agregar} />
					</>
				)}
				{folio && (
					<p className="confirmacion">
						Pedido {folio} confirmado. Te avisaremos el detalle del pago a tu
						correo.
					</p>
				)}
				{carrito.length > 0 && <FormularioPago total={total} onPagar={pagar} />}
			</section>
		</Layout>
	);
}
