# Practica 04

## Preguntas de reflexion

### 1. Express manda los rechazos de un handler async directo al middleware de errores, sin try/catch en cada ruta. ¿Que tendrian que agregar en cada ruta si esto no fuera asi?
Tendria que agregarse el try/catch para todos los handlers y pasarselo a la middleware con un next(error) para que pueda manejarse desde ahi.

### 2. ¿Por que el servicio no lanza directamente un 409 en vez de EjemplarPrestadoError?
Porque si revuelve un JSON valido, solo que no es lo que se espera, ya que en este caso, el error 409 sucede porque queremos prestar un libro que ya no tiene ejemplares disponibles.

### 3. Si mañana agregaran una app movil que tambien consume esta API, ¿que archivos de esta practica tendrian que tocar?
Seria el *servidor.ty*, aunque con un parentesis, porque tal y como tenemos actulmente servidor.ts esta enviando y recibiendo JSON, que es lo que necesita una aplicacion movil, son los datos, y no un HTML como se hacia antes con una arquitectura monolitica.

## Evidencias
- ### 201
![Prestamo 201](/evidencias/p04_01_prestamo-201.png)

- ### 409
![Prestamo 409](/evidencias/p04_02_prestamo-409.png)

- ### 400
![Prestamo 400](/evidencias/p04_03_prestamo-400.png)