# Tyler

> Juego de lógica

## Instrucciones de construcción

We want to develop a simple game -Tyler- in React.js.
The game consists in a square matrix of square tiles that will be all of the same color except
for one.
To play, the user will need to click on that different colored tile to proceed to the next level.
The game is over when the user clicks on a wrong tile.
We don’t have a list of tasks, but instead, a set of business rules to develop this game:
  1. The layout consists only on the game matrix, a counter showing the current score
  (starting at zero) and a leaderboard showing the top 5 high scores.
  2. The leaderboard must be non-volatile, but there’s no need for an API.
  3. The starting level is always a two by two matrix.
  4. On each level, the order of the matrix is increased by one.
  5. The color for each level tiles must be randomly generated.
  6. The color of the different tile has to be the same as the other tiles, differing only in its
  lightness.
  7. When the user loses, he might be presented with an input to complete with his name
  to enter the top 5 leaderboard.

## Codebase rules:

  1. The app must be developed using React.js.
  2. There must be a readme file documenting installation and usage.
  3. You can use any boilerplates, frameworks, libraries and UI helpers you want, but they
  must be included in the readme file documenting its purpose and a brief explanation
  with the reasoning for your choice.
  4. Code must be pushed into any public repository of your choice, sharing the link to ---

## Instalación

Se puede instalar en un servidor o como estático.

Para un servidor, sólo se debe correr el comando ``` npm start ```
Para un estático se corre el comando ``` npm run build```, terminado el proceso nos desplazamos a la carpeta ``` /build ``` y esa carpeta contiene los estáticos de nuestra aplicación.

## Deploy en Now

[Now](https://www.npmjs.com/package/now) es un servicio de host muy interesante, permite subir aplicaciones monolíticas o microservicios, incluso soporta [Docker](https://www.docker.com/).

Esta aplicación se puede montar en Now con el comando ``` npm run deploy ```, sólo tendrá que tener instalado el CLI de now, una cuenta y estar logeado.


## Estructura

+ -> App.jsx(Smart)
  + -> AppContainer(UI)
    + -> Header(UI)
    + -> Top5(UI)
    + -> Cuadrado(Smart)
    + -> Footer(UI)
    + -> ModalContainer(Smart) - Portal
      - -> Modal(UI)
        + -> ModalLose(Smart)
          - -> Top5(UI)



## __Código paso a paso__

### Componentes, su funcionalidad y métodos

> ## App

```state```

Siendo el entry point tiene la mayor de las responsabilidades, contiene casi todo el estado de la aplicación.

```componentDidMount()```

Cuando se monta se hace un llamado al *localStorage* para saber sí hay información del Top5.

Desde aquí se hace la llamada a ```nextLevel()```

```nextLevel()```

Este método llama a ```setColor()```, modifica las variables nivel, cuadrados y cuadradoSelected del estado.
Se usan **servicios** que se explicarán más adelante.

```setColor()```

Setea los colores del estado.

```handleClickCuadrado()```

Aquí está la lógica de sí el usuario selecciono correctamente el cuadrado de color diferente.
En caso de acertar se pasa al siguiente nivel ```nextLevel()```, sí erra se verifica que el puntaje sea mayor a cero para que se despliegue el modal, sí es igual a cero solamente se setea el color.


```handleClickSaveModal()```

Setea en el state de App los elementos que le llegan como parámetro del modal, adicional guarda ese Payload en el localStorage.

```handleClickCloseModal()```

Se agrega una opción para que el usuario salga del modal sin necesidad de agregar su nombre para el puntaje.

```handleClickShowTop5()```

Despliega o contrae el Top 5.

> ## Header

El Header al ser un componente de UI tiene como misión renderizar 3 elementos que se pasan como propiedades desde App: 
- Nivel en el que se encuentra el usuario
- Su puntaje actual
- Los colores de los cuadrados, así como del que se busca

> ## Top5

Este componente de UI renderiza el array que se le pasa como propiedad.
Se le pasa un ``` handleClick ``` para mostrar o no todos sus elementos y con ello el usuario tenga más espacio en pantalla para jugar o agregar su puntuación (ya que también se incluye en el portal que se despliega al perder)

> ## Cuadrado

Este elemento es el cuadrado que se renderiza en pantalla, elegí que fuera Smart Component pues internamente maneja un handleClick que a su vez llama a una función que se le pasa como parámetro, se hizó así pues dentro de la función se envía un Payload con el id del elemento.
Este componente tiene una ternary en la propiedad Style para verificar si su ID es igual al cuadro a seleccionar.
Nota divertida: Le coloque otra ternary el la propiedad title con 'Este si' o 'Este no' dependiendo de sí es el que se está buscando.


> ## Footer

Elemento de UI.

> ## Modal

El modal usa la propiedad ``` createPortal ``` de 'react-dom, con él se pueden renderizar elementos fuera del entry principal.
Ayuda con temas de estilo.

> ## ModalLose

Este es un componente Smart pues maneja la lógica de un input tipo text. Agrega el nuevo objeto que el usuario le pase, llama al servicio burbuja lo envía como Payload para que el componente App lo pueda actualizar en el estado general.
También renderiza el Top5.

----

> ## Servicios

Se han creado servicios para modularizar pedazos de código.

```llenarArray()```

Dado que no se puede iterar sobre un array vacío, este servicio literalmente llena el array que se le pase por parámetro con números, mismos que después serán usados como ID.
Recibe 3 parámetros:
  - newSize: Nuevo tamaño que tiene el array.
  - oldSize: Anterior tamaño del mismo.
  - oldArray: El array en cuestión.
Adicional el método está optimizado para sólo iterar sobre la diferencia entre el nuevo tamaño y el anterior, por ello se pasa el array como parámetro, para que al retornarlo aprovechemos los elementos que ya tenía 'llenos'.

```random()```

Aquí se tienen 3 métodos que se exportan por separado, se pueden importar por medio de destructuring.

```numRandom()``` Regresa un número random
```colorRandom()``` Sirve como template para un color hsl
```lightnessRandom()``` Regresa un número random en los percentiles 1-25 o 75-99


```burbuja()```

Literalmente es el método de la burbuja para acomodar elementos de un array dependiendo uno de sus valores.
Como parámetro recibe el array en cuestión (se hace un clone del mismo porque tuve un fix que no entiendo, asumo que array de parámetro es en realidad una referencia al primero y tiene su scope original, pues el state de mi aplicación se modificaba mientras iteraba sobre él).
La otra modificación que se hizo fue retornar solamente los primeros 5 valores.

```ApiTop5```

Es una Api 'hardcodeada' con 5 elementos para que, en caso de que en localStorage no haya nada, se presenten en la lista de Top5.

----
## Soluciones de UI

- Para renderizar de forma dinámica las columnas se recurrió a CSS Grid Layout, al contenedor de los cuadrados se le pasa en la propiedad style un objeto que afecta a la propiedad ``` {{ gridTemplateColumns: `repeat( ${this.state.nivel + 1} , auto)` }} ```

- Los colores aleatorios y el diferente sólo en **lightness** se consiguió con ``` background: hsl(...) ```. Ese formato de color permite modificar **lightness** sin problemas.

- El proyecto en general usa CSS Grid Layout.

----

## Dificultades por resolver

La solución de hacer columnas dinámicas a través de CSS Grid Layout fue conveniente pero sí la aplicación tuviera usuarios con navegadores viejos, simplemente la UI se rompería. Se trabaja en una solución complementaria.

----

## ¡Gracias!

Fue muy divertido hacer esto.

Ángel Vásquez 🚀

