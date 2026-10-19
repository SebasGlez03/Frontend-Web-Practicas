import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function MiComponente(param) {
    var titulo = param.titulo;
    return /*#__PURE__*/ _jsx("h1", {
        children: titulo
    });
}
export default function App() {
    return /*#__PURE__*/ _jsxs("div", {
        className: "contenedor",
        children: [
            /*#__PURE__*/ _jsx(MiComponente, {
                titulo: "Hola SWC"
            }),
            /*#__PURE__*/ _jsx("p", {
                children: "Elemento nativo"
            })
        ]
    });
}

