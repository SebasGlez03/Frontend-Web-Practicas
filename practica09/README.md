# Practica 09

### 1. ¿Que linea del Service o del Controller tuvo que cambiar para que Clases hablara con MySQL?
Primero fue hacer que en el Controller, la clase dejara de ser una *interface* y se convirtiera en una *class*. Posteriormente, en Service, se cambio el import, haciendo que ya no fuera un *type*, sino, simplemente un import cualquiera de una clase.

### 2. ¿Por que *InscripcionesService* no tuvo que cambiar ni una linea de las reglas de cupo duplicados?
Porque depende de la interfaz *InscripcionRepository* inyectada por el token *INSCRIPCION_REPOSITORY*, no de la clase concreta.

### 3. ¿Por que una interfaz no puede validar nada en tiempo de ejecucion?
Porque TypeScript borra la interfaz al compilar, no queda clase, constructor ni decoradores. 

### 4.1. Una de las cuatro opciones es indispensable: Sin ella la validacion no hace nada y tampoco avisa.
La indispensable es *whitelist: true*, sin ella los campos que no estan en el DTO pasan sin mas y sin avisar. Tambien el *forbidenNonWhiteListed* no tiene efecto si no existe whitelist.

### 4.2. ¿Que codigo de estado responde y que trae en el cuerpo?
400 y el cuerpo estandar de nest.

### 5. ¿Cuantas lineas quedo mas corto el controlador?
El controlador paso de 81 a 50 lineas, asi que es 22 lineas mas corto. Esto porque principalmente se quito el try-catch y las validaciones que hacia anteriormente.

### 6. Si la respuesta llega en los dos casos, ¿quien bloquea realmente y a quien protege?
El servidor responde igual en los dos casos, el navegador es quien bloquea, y esto protege al usuario, impidiendo que un origen no autorizado lea la respuesta.

## Evidencias
- Codigo 400 de validacion.
![Codigo 400 de validacion](/evidencias/p09_1_validacion-400.png)

- Conflicto traducido por el filtro.
![Conflicto traducido por el filtro](/evidencias/p09_2_filtro-dominio.png)

#### Encabezados de CORS con dos origenes.
- Origen valido
![CORS origen valido](/evidencias/p09_3_cors-origen-1.png)

- Origen invalido
![CORS origen invalido](/evidencias/p09_4_cors-origen-2.png)