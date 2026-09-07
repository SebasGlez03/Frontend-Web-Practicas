# Practica 02

## Paso 2. El dominio, antes que el programa.

### - ¿Por que una union de valores y no una enumeracion?
Porque al momento de generar el javascript, se genera de manera distinta al momento de ejecucion.

## Paso 3. La aduana del archivo.

### - ¿Que se gana con el tipo desconocido en lugar del que acepta todo?
Se gana seguridad al momento de ejecucion, porque si lo dejamos como **any** (que es el valor que toma por defecto) el programa iba a asumir que sabemos lo que hacemos e iba a confiar en que lo que agreguemos este bien (lo que podria suceder si hubieramos trabajado unicamente con javascript), pero al poner **unknown** el compilador de typescript nos obliga a agregar validadores para evitar estos problemas de ejecucion.

![Registro descartado](/evidencias/p02_03_registro-descartado.png)

## Paso 4. Las reglas del mostrador.

### - ¿Por que la fecha entra como parametro?
Porque al ser parametro podemos mandarle cualquier fecha, de modo que podemos hacer que sea hoy, ayer. mañana o una fecha en especifico. Tambien, si hubieramos puesto *hoy* como un valor **const** ocasionaria problemas, ya que si la fecha llega a cambiar (a mañana, por ejemplo) crearia inconsistencias.

### Prestamo realizado correctamente

![Prestamo realizado correctamente](/evidencias/p02_01_prestamo.png)

### Aviso al intentar prestar un libro sin ejemplares

![Prestamo sin ejemplares](/evidencias/p02_02_sin-ejemplares.png)

### Error al agregar un nuevo estado

![Error de estado nuevo](/evidencias/p02_04_estado-nuevo.png)

## Paso 6. Transpilar no es verificar.

### Error de revision de tipos
![Error de revision de tipos](/evidencias/p02_05_error-tipado.png)

### Ejecucion de programa con error
![Programa ejecutado con error](/evidencias/p02_06_ejecucion-con-error.png)