# Practica 05

### 1. ¿Que genero el comando nest new?
Genero el proyecto con la arquitectura por capas en la que trabaja el framework de NestJS.

### 2. ¿Que hace el AppService que ya viene generado?
Crea lo que se mostrara en el localhost cuando se abra en el navegador.

### 3. ¿Por que la ruta funciona sin declarar nada en *app.module.ts*?
Porque ya viene agregada como provider en la tag de .

### 4. ¿Que pasaria si el cuerpo de la paticion viniera vacio?
Regresa un error de codigo 500, de problema en el servidor, supongo que porque la funcion estaba esperando un dato, pero al venir vacio y no tener como "cachar" el error, suelta un 500 y no un 400.

## Probar las cuatro peticiones
- Probar en el navegador la ruta rauz y la de clases
![Ruta Raiz](/evidencias/p05_01_ruta-raiz.png)
![Ruta Clases](/evidencias/p05_02_ruta-clases.png)

- Probar con REST Client, postman o curl la peticion de creacion
![Peticion de Creacion](/evidencias/p05_03_peticion-creacion.png)

- Confirmar que la lista crecio despues de crear la clase
![Lista crece](/evidencias/p05_04_lista-crece.png)

### 5. ¿En que archivo vive hoy toda la logica de la practica?
Se encuentra en el archivo de *app.controller.ts* que creamos para atrapar toras las peticiones HTTP.