# Practica 14

### ¿Por que en la pestaña Red salen dos peticiones al cargar?
Cuando se utiliza el *RestrictMode*, React corre useEffect dos veces de manera intencionada al crear el componente.

### ¿Que pasa si quitas el arreglo de dependencias del efecto?
El efecto va a correr despues de cada renderizado del componente, lo que puede provocar peticiones infinitas a la API.

### ¿Que hace `e.preventDefault()` y que pasa si lo quitas?
Cancela lo que hace de manera predetermianda el navegador cuando un usuario hace cierta accion.
Si no se pone, el navegador va a intentar enviar el formulario por su cuenta y recargara toda la pagina.

## Evidencias
- Pestaña de Red 
![Pestaña de Red](/evidencias/p14_01_pestania-red.png)

- Pedido confirmado con folio
![Pedido confirmado con folio](/evidencias/p14_02_pedido-confirmado-con-folio.png)

- Error 409
![Error 409](/evidencias/p14_03_error-409.png)

- API Apagada
![API Apagada](/evidencias/p14_04_api-apagada.png)
