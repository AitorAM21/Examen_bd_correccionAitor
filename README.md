# Pagina de Peliculas

## Indice

- [Pagina de Peliculas](#pagina-de-peliculas)
  - [Indice](#indice)
  - [Explicación <a name = "Explicación"></a>](#explicación-)
    - [¿Que hay que hacer? <a name="preguntas">](#que-hay-que-hacer-a-namepreguntas)
  - [Como arrancar <a name = "arrancar"></a>](#como-arrancar-)
    - [Prerequisites  <a name = "prerequisitos"></a>](#prerequisites--)
    - [Installing](#installing)
    - [Extensión de Chrome <a name="extensiones">](#extensión-de-chrome-a-nameextensiones)
  - [Uso y Aranque <a name = "uso"></a>](#uso-y-aranque-)
  - [Ayuda <a name="ayuda"></a>](#ayuda-)
  - [COLORES](#colores)

## Explicación <a name = "Explicación"></a>

    Pagina para ver las peliculas de los ultimos extrenos así como los detalles de las peliculas y los actores; todo categorizado según las categorias de clasificación

### ¿Que hay que hacer? <a name="preguntas">

  1.- Completar los modelos
    - Revisar el esquema de la base de datos y los modelos que hay en la carpeta *src/models* y completar/modificar lo que haga falta para que se puedan hacer las consultas y cumpla con el esquema
  2.- Crear el Model 'actors'
    - Existe el model actor_details, pero en el esquema se puede ver la coleccion 'actors'. Se debe hacer esta colección
  3.- Revisar las funciones y completar las consultas de las funciones en:
    - actor/actor.functions
    - movies/movie_video.functions
    - categories/categories.functions
    - movies/movie.functions


## Como arrancar <a name = "arrancar"></a>

El proyecto no arrancará directamente, por una parte hace falta tener un fichero **.env** que especifique en que puerto tiene que lanzarse y las credenciales de conexión a la base de datos.

Por otra parte, hace falta instalar las dependencias que tenemos en el package.json de forma habitual.

### Prerequisites  <a name = "prerequisitos"></a>

El fichero ***.env*** se suministra en el momento de comienzo:

```
.env
```


### Installing

Para instalar las dependencias usar el comando:

```
npm install
```

### Extensión de Chrome <a name="extensiones">

  Para evitar el uso de las plantillas, se usará una extensión de chrome que permita visualizar la información:

  <a href="https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=es">
    JSON VIEWER
  </a>

## Uso y Aranque <a name = "uso"></a>

Para arrancar el proyecto se debe usar el comando:

```
npm start
```

## Ayuda <a name="ayuda"></a>

Os dejo unos enlaces que os pueden servir de ayuda:
- https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application-es
- https://getbootstrap.com/
- https://ejs.co/#docs
- https://html5up.net/
- https://ajaxhispano.com/ask/puedo-usar-sentencias-condicionales-con-plantillas-ejs-en-jmvc-33788/
- https://csslayout.io/
- https://www.w3schools.com/css/css3_buttons.asp
- https://uiverse.io/
- https://getcssscan.com/css-buttons-examples


## COLORES

E53935
8E24AA
303F9F
0288D1
388E3C
FFA000
E64A19
616161
263238
