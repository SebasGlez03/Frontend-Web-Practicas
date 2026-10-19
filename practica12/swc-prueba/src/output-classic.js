function MiComponente(param) {
    var titulo = param.titulo;
    return /*#__PURE__*/ React.createElement("h1", null, titulo);
}
export default function App() {
    return /*#__PURE__*/ React.createElement("div", {
        className: "contenedor"
    }, /*#__PURE__*/ React.createElement(MiComponente, {
        titulo: "Hola SWC"
    }), /*#__PURE__*/ React.createElement("p", null, "Elemento nativo"));
}

