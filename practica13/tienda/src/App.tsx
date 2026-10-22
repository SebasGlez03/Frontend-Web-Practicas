import { useState } from "react";
import { productos, type Producto } from "./datos";
import { Layout } from "./Layout";
import { Encabezado } from "./Encabezado";
import { PiePagina } from "./PiePagina";
import { Catalogo } from "./Catalogo";
import { Filtro } from "./Filtro";

const categorias = ['todas', ...new Set(productos.map((p) => p.categoria))];

// Solo App puede hacer `variable++` o cambiar variables, el resto de componentes son solo lectura
export default function App() {
  const [categoria, setCategoria] = useState('todas');
  const [carrito, setCarrito] = useState<Producto[]>([]);
  const visibles = categoria === 'todas' ? productos : productos.filter((p) => p.categoria === categoria);
  const total = carrito.reduce((suma, p) => suma + p.precio, 0);

	return (
		<Layout
			encabezado={<Encabezado piezas={carrito.length} />}
			pie={<PiePagina piezas={carrito.length} total={total} />}
		>
			<section className="portada">
				<h1>Catalogo de temporada</h1>
        <p>{visibles.length} productos disponibles</p>
			</section>
      <Filtro categoria={categorias} activa={categoria} onCambiar={setCategoria} />
      <Catalogo productos={visibles} onAgregar={(p) => setCarrito([...carrito, p])} />
		</Layout>
	);
}
