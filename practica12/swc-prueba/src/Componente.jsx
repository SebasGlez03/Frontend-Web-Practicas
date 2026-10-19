function MiComponente({ titulo }) {
	return <h1>{titulo}</h1>;
}

export default function App() {
	return (
        <div className="contenedor">
            <MiComponente titulo="Hola SWC" />
            <p>Elemento nativo</p>
        </div>
	);
}


