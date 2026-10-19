# Practica 12

### ¿En que se convirito cada etiqueta del JSX?
Utilizando el runtime **classic** se convirtio en objetos de la libreria de **React**, siendo estos *createElement()*.
Pero cuando utilizamos el runtime en **automatic** se convierten a lo que entiendo yo, a lenguaje JavaScript puro.

### Si React es "solo una biblioteca", ¿quien traduce el JSX?
Se transpila como lo hace TypeScript, convirtiendose posteriormente en JavaScript.

### ¿Que hace *createRoot* y que hace *render*?
*createRoot* conecta React con el DOM y *render* pinta los elementos dentro del contenedor del DOM.

### ¿Por que el nombre de un componente empieza con **mayuscula**?
Porque si fuera con minuscula React lo iba a tomar como una etiqueta de HTML.

## Evidencias
- Dos salidas de **SWC**
![Salida classic](/evidencias/p12_1_swc-classic.png)
![Salida automatic](/evidencias/p12_2_swc-automatic.png)

- Hola mundo sin **JSX**
![Hola mundo sin JSX](/evidencias/p12_3_holaMundo-sin-jsx.png)

- Pagina con las tres tarjetas
![Tres tarjetas](/evidencias/p12_4_tres-tarjetas.png)