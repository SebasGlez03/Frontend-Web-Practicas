# Practica 03

## Preguntas de reflexion

### 1. ¿Hizo falta una base de datos real para probar la regla de negocio? ¿Que dice eso sobre para que sirve el patron Repository?
No, no hizo falta de una base de datos real, esto quiere decir que el patron de *Repository* sirve para poder crear una "plantilla" de metodos que pueden ser usados de manera generica por varios objetos (prestamo, libros, etc.), en donde pueden perzonalizarse en un futuro, creando una clase para los casos especificos y extendiendo de la clase con Repository.

### 2. El Service recibe el repositorio como *Repository<Prestamo>*, no InMemoryPrestamoRepository. ¿Que se rompia si usaban la clase correcta?
Si se utiliza *InMemoryPrestamoRepository* se romperia el desacomplamiento con el que cuenta actualmente, esto porque *PrestamoRepository* funciona como una interfaz en Java, creando solo la plantilla de el metodo sin expresar exactamente la logica que hay detras, ya que actualmente la clase que implementa el Repository es la clase InMemoryPrestamoRepository que actualmente guarda los datos en memoria, pero si se prefiere cambiar posteriormente a una base de datos real en MySQL, PostgreSQL, etc, podria hacerse en una clase, por ejemplo: implementacion-mysql-prestamo.repository.ty podria hacerlo sin problema.

### 3. Si cambiaran el Map en memoria por una base de datos real, ¿cuantos archivos tocarian? ¿por que serian tan pocos?
Se crearia practicamente una nueva infraestructura, en donde utilice la conexion con la base de datos utilizando un Mapeador o lo que necesite para implementar los registros, implementando la interface de dominio que se piense utilizar, siendo en este caso *prestamo.repository.ts*