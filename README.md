# Challenge Frontend

El deply del challenge:

### Detalles de challenge
Desarrollar un cliente para un Blog. 
El mismo debe ser armado en React, y consumir los datos de una JSON Placeholder, una API que expone datos ficticios en formato JSON.

Los endpoints que deberás utilizar son:

GET https://jsonplaceholder.typicode.com/posts
Devuelve un listado de posts

GET https://jsonplaceholder.typicode.com/posts/:id
Devuelve el detalle de un post en base al id especificado en el parámetro

POST https://jsonplaceholder.typicode.com/posts
Simula la creación de un nuevo post

PUT/PATCH https://jsonplaceholder.typicode.com/posts/:id
Simula la actualización de un post en base al id especificado en el parámetro

DELETE https://jsonplaceholder.typicode.com/posts/:id
Simula la eliminación de un post en base al id especificado en el parámetro

Utilizando estos endpoints, la aplicación deberá contener las siguientes secciones:

Home
Mostrará un listado de posts. En este listado, deberá mostrarse solamente el título de cada uno, y las acciones para ir al detalle del mismo, editarlo o eliminarlo.

Detalle
Deberá recibir el identificador de un post y, en el caso de que exista, mostrar sus datos. Caso contrario, deberá mostrar un mensaje de error.

Formulario de creación
Deberá mostrar un formulario que permita crear un nuevo post. El formulario deberá contener los campos título y contenido, y realizar la validación de los mismos (ambos son obligatorios). Al hacer el submit, debe realizarse la petición al endpoint correspondiente.

Formulario de Edición
Deberá recibir el identificador de un post y mostrar un formulario que permita editarlo. En el caso de que no exista, mostrar un mensaje de error. El formulario deberá contener los campos título y contenido, y realizar la validación de los mismos (ambos son obligatorios). Al hacer el submit, debe realizarse la petición al endpoint correspondiente.

Otras consideraciones

La app deberá contener un encabezado con los links al Home y al Formulario de Edición. 
Debe ser responsive, se puede utilizar una plantilla. 
La acción de “Eliminar” que contendrán los posts listados en la sección Home deberán realizar la petición al endpoint correspondiente.
La gestión del estado puede realizarse de la forma que prefieran, como así también la lógica de navegación.

## Detalles de Implemetación:
 Creado el proyecto con Create React App
### Librerías utilizadas:
Se configuro para el proyecto Eslint (Airbnb: https://github.com/airbnb/javascript), Prittier y Husky.

Para el manejo de rutas React Router Dom

npm install --save react-router-dom

Para los estilos se utilizó React Bootstrap

npm install react-bootstrap bootstrap@4.6.0

Para cuando la api está cargando, mostramos un spinner:

npm install --save react-spinners

Para hacer peticiones a la API usamos Axios:

npm install axios

En el archivo index que está en la carpeta public colocamos:

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

Cuando voy a eliminar un post para preguntar a confirmación uso:

npm install --save sweetalert

y 

npm install --save sweetalert2

usamos para los formulario:

npm install react-hook-form

Para descargar el proyecto:

git clone git@github.com:mgsanchezdev/ blog-frontend.git

cd blog-frontend

npm install

Se abre en el navegador:

http://localhost:3000




