import type { ReactNode } from "react";

interface LayoutProps {
	encabezado: ReactNode; // ReactNode representa todo lo que puede pintar, como texto o componentes
	pie: ReactNode;
	children: ReactNode;
}

export function Layout({ encabezado, pie, children }: LayoutProps) {
	return (
		<div className="tienda">
			{encabezado}
			<main className="contenido">{children}</main>
			{pie}
		</div>
	);
}
