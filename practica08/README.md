# Practica 07

### 1. ¿Por que esta interfaz no menciona Express, NestJS, ni memoria?
Esto pasa porque esta clase no sabe si detras existe un map en memoria o en MySQL.

### 2. ¿Que palabra de esa clase es la que promete cumplir la interfaz del paso anterior?
La palabra es _implements_ asi como en Java, que significa que la clase tiene que implementar todos los metodos de la interfaz.

### 3. ¿Por que este archivo no sabe que es una peticion HTTP?
Porque esa es responsabilidad unica del controlador, aqui solo se realiza la logica de negocio.

### 4. ¿Que prueba, en los hechos, que agregar Miembros no rompio nada de inscripciones?


## Evidencias
- Crear miembro
![Crear Miembro](/evidencias/p07_01_crear-miembro.png)

- Listar miembros
![Listar Miembros](/evidencias//p07_02_listar-miembros.png)

- Buscar por ID
![Buscar por ID](/evidencias/p07_03_buscar-por-id.png)

- Actualizar miembro
![Actualizar Miembro](/evidencias/p07_04_actualizar-miembro.png)

- Eliminar miembro
![Eliminar Miembro](/evidencias/p07_05_eliminar-miembro.png)