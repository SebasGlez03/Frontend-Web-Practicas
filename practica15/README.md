# Practica 15

### ¿Por que el 404 si tiene encabezado y pie?
Porque la ruta del * con el `<NoEncontrado />` esta anidada dentro de el `<Route />`, y el router renderiza el layout con el encabezado y el pie de pagina y coloca la pagina 404 en el `<Outlet />`. No es un 404 real del servidor, si no que es un componente dentro del marco comun.

### ¿Que cambia en la pestaña Red si usas `<a href>` en lugar de Link? Muestralo con capturas.
Con `<Link>` el React Router cambia la URL sin regargar la pagina, asi que en la pestaña de Red solo aparece la peticion a la API.
![React Router con Link](/evidencias/p15_04_con-Link.png)

Mientras que con `<a href>` el navegador hace una navegacion completa y en Red se ve ademas la peticion del documento HTML y los recursos, con lo que la pagina se recarga y se pierde el estado.
![React Router con `a href`](/evidencias/p15_05_con-a.png)

### ¿En que tipo de dato llega el id de la URL y que pasa si no lo conviertes?
El `useParams()` devuelve un string, nunca un numero. Por eso se usa el `Number(id)`, ya que el `traerClase()` espera un number. Si no se convierte, Typescript marca el error.

### ¿Que pasa al ir de `/clases/1` a `/clases/2` si el id no esta en las dependencias del efecto?
Se reutilizaria la misma instancia de *PaginaClase* y solo camban los params, si el efecton o tiene id en sus dependencias, no se vuelve a ejecturar, no se hace nueva peticion y se sigue mostrando la clase 1 auqnue la URL diga `/clase/2`. Ademas la limpieza anterior tampoco corre.

## Evidencias
- Catalogo
![Catalogo completo](/evidencias/p15_01_catalogo.png)

- Detalle horario lleno
![Detalle horario lleno](/evidencias/p15_02_detalle-horario-lleno.png)

- Error 404
![Error 404](/evidencias/p15_03_error-404.png)

- `<Link>` y `<a href>`
![Con Link](/evidencias/p15_04_con-Link.png)
![Con a href](/evidencias/p15_05_con-a.png)