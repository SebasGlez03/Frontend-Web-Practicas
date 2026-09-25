# Practica 06

### 1. ¿Que pasaria si el modulo no quedara registrado en la raiz?
Si no quedara registrado el modulo no funcionaria correctamente, los proveedores y los controladores no se importarian, por lo que el servicio seria inaccesible y el endpoint de la API no se agregaria a la ruta, e iba a hacer que apareciera errores de dependencia nula.

### 2. ¿Por que los metodos del repositorio devuelven promesas si los datos van a estar en memoria?
Los metodos devuelven promesas para mantener la compatibilidad de la interfaz de *InscripcionesRepository*. Al definir la interfaz con el tipo Promise se asegura que cualquier implementacion cumpla con con el comportamiento esperado, desacoplando asi la logica de los datos.

### 3. ¿Que error aparecio al cambiar a la interfaz, y porque la clase si se habia resuelto sola?
El error pasa porque la palabra clave de implements es una promesa que dice que se va a cumplir el contrato. La clave implementa la interfaz, lo que garantiza que todos los metodos existan. El compilador de Typescript solo verifica la firma, no la logica interna. Esto permite sustituir el repositorio sin modificar la clase servicio, siempre y cuando la nueva imlementacion respete la interfaz.

### 4. ¿Por que el servicio necesita un token para el repositorio, pero el controlador no lo necesita para el servicio?
El controller solo sebe saber sobre sus responsabilidadesm que son recibir peticiones HTTP y llamarlas. El service contiene la logica de negocio. Al inyectar el repositorio en el servicio usando un token, se aplica el patron Repository de forma transparente. Esto aisla la complejidad de la persistencia de datos del controller, manteniendo el controller limpio y enfocado unicamente en las capas de presentacion.

### 6. ¿Cual es la diferencia entre un 400 y un 409?
- 400 Bad request: Indica que la peticion contenia datos invalidos.
- 409 Conflict: Indica que la peticion no puede procesarse porque el recurso ya existe.

### 7. ¿Por que cambio el codigo de estado de esta ultima peticion?
El codigo de estado deberia ser manejado en la capa de controller. La logica de negocio en el service solo reporta un error de dominio. El controller debe tener manejo de excepciones que convierta estos errores de dominio en codigos HTTP correctos y apropiados para la API REST.

## Evidencias

- Codigos 409
![Codigo 409 - Cupo lleno](/evidencias/p06_02_409-cupo-lleno.png)
![Codigo 409 - Duplicado](/evidencias/p06_03_409-duplicado.png)

- Codigo 201
![Codigo 201 - Header Location](/evidencias/p06_01_201-header-location.png)

- Codigo 200
![Codigo 200 - Cancelacion](/evidencias/p06_04_200-cancelacion.png)