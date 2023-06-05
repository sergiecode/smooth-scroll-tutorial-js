![Smooth Scroll en Javascript](https://github.com/sergiecode/smooth-scroll-tutorial-js/blob/master/smooth-scroll-tutorial-js.jpg?raw=true)

# Tutorial de Smooth Scroll con JavaScript

Este tutorial te guiará paso a paso para implementar un smooth scroll (desplazamiento suave) en tu sitio web utilizando JavaScript. El smooth scroll permite que los desplazamientos de la página se realicen de manera suave y gradual, brindando una experiencia de usuario más agradable.

## Requisitos

Antes de comenzar, asegúrate de tener los siguientes requisitos:

-   Conocimientos básicos de HTML, CSS y JavaScript.
-   Un editor de código para modificar tus archivos.

## Pasos

### 1. Incluir el código JavaScript

Primero, debes incluir el código JavaScript en tu archivo HTML. Puedes hacerlo dentro de una etiqueta `<script>` o en un archivo JavaScript externo que importes en tu HTML. Asegúrate de colocar el código dentro de las etiquetas `<script>` en la sección `<head>` o antes de cerrar la etiqueta `</body>` para garantizar que se cargue correctamente.

    //El botón en el HTML tendría clase botonHastaArriba
    const scrollearHastaArriba = document.querySelector(".botonHastaArriba")
    //Esta es la acción que se ejecutaría al hacer click:
    scrollearHastaArriba.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })

### 2. Agregar el botón

En tu archivo HTML, agrega un botón con una clase específica que utilizarás en tu código JavaScript para identificarlo. Por ejemplo, puedes usar la clase "botonHastaArriba" como se muestra a continuación:

    <button class="botonHastaArriba">Ir hasta arriba</button>

### 3. Smooth scroll al elemento seleccionado

Si deseas implementar un smooth scroll a un elemento específico en la página, puedes utilizar el siguiente código:

    const elemento = document.getElementById("elemento-seleccionado");
    elemento.scrollIntoView({ behavior: 'smooth' });

Asegúrate de reemplazar `"elemento-seleccionado"` con el ID del elemento al que deseas desplazarte suavemente.

### 4. ¡Listo!

Una vez que hayas seguido estos pasos, tendrás un smooth scroll funcionando en tu sitio web. Al hacer clic en el botón con la clase "botonHastaArriba", la página se desplazará suavemente hacia arriba. Si utilizas el código para desplazarte a un elemento seleccionado, la página se desplazará suavemente hasta ese elemento.

¡Explora diferentes formas de implementar el smooth scroll en tu sitio web y mejora la experiencia de tus usuarios!

Recuerda guardar los cambios en tus archivos y subirlos a tu repositorio de GitHub para que estén disponibles en línea.

Espero que este tutorial te haya sido útil. ¡Buena suerte con tu proyecto!
