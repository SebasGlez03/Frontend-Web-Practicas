import { Saludo } from "./Saludo";
import { TarjetaPerfil } from "./TarjetaPerfil";

function App() {
	return (
		<main className="pagina">
			<Saludo nombre="ISW" />

      <section className="equipo">
        <TarjetaPerfil nombre="Juan Perez" carrera="Ingenieria en Software" semestre={5} />
        <TarjetaPerfil nombre="Maria Garcia" carrera="Ingenieria en Software" semestre={4} />
        <TarjetaPerfil nombre="Carlos Lopez" carrera="Ingenieria en Software" semestre={5} />
      </section>
		</main>
	);
}

export default App;
