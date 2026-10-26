# Practica 13

### ¿Por que el Layout no necesita saber que es una tienda?
Porque solo se encarga de poner los datos generales que iran dentro de la pantalla principal.

### ¿Que pasa si escribes `onClick={onAgregar(producto)}` sin la flecha?
Esto haria que se ejecute automaticamente el componente en lugar de esperar a que el usuario le haga click.

### ¿Por que con un `carrito.push(...)` el contador no se mueve y no sale ningun error?
Porque en React al modificar un arreglo con `carrito.push(...)` no le avisa a React que debe volver a renderizar el componente.

## Evidencias
- Catalogo
![Catalogo](/evidencias/p13_01_catalogo.png)

- Filtro categoria
![Filtro categoria](/evidencias/p13_02_filtro-categoria.png)

- Carrito con productos
![Carrito con productos](/evidencias/p13_03_carrito-con-productos.png)
