# Practica 20

### ¿Que diferencia hay entre un **signal** y un **computed**, y cual se parece a **useState** y cual a **useMemo**?
Un **signal** almacena estado reactivo y permite modificarlo con `set()`/`update()`, equivale aproximadamente a un *useState*. Un **computed** es un valor derivado, de solo lectura, que se recluta y es atrapado automaticamente cuando cambian sus dependencias, equivale a *useMemo*, pero sin arreglo de dependencias manual.

### ¿Que pasa si el filtro hace `new Catalogo()` en lugar de `inject(Catalogo)`?
`inject(Catalogo)` obtiene la instancia singleton de Angular, compartida por **App** y **FiltroCategoria**. Con `new Catalogo()` el filtro crearia una instancia independiente: sus botones cambiarian su propio estado, pero no el catalogo de **App**, por lo que la lista, contenedores y detalle no se actualizarian correctamente. 