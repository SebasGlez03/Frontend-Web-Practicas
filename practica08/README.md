# Practica 08

### 1. ¿Por que el paquete del adaptador se llama adapter-mariadb si samos MySQL?
Porque MariaDB comenzo inicialmente como un fork de MySQL, por lo que heredan todo lo que hay detras, y hablan el mismo idioma.

### 2. ¿Editar schema.prisma cambio algo en la base de datos antes de migrar?
No, los cambios se quedan solo en el codigo si no se migra previamente.

### 3. ¿La carpeta de migraciones es una foto del esquema o un historial?
Es un historial, ya que no rehace tablas que ya existen, solamente detecta los cambios que se han realizado y actualiza las mismas (crea unicamente lo que previamente no existia).

### 4. ¿Por que Horario.clase si crea columna y Clase.horarios no?
Porque solo se genera la columna en el modelo que contenga la tag de @relation.

### 6. ¿De donde sale la relacion de muchos a muchos entre Miembro y Horario, si nunca se declaro?
En la declaracion del modelo, porque estamos diciendo que el modelo de Inscripcion tendra muchos miembros y muchos horarios, por lo tanto, automaticamente se declara como muchos a muchos.

## Evidencias
- Gestor de base de datos con tablas creadas
![Prisma Stucio con tablas creadas](/evidencias/p08_1_prisma-tablas-creadas.png)