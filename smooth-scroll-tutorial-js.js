
//El botón en el HTML tendría clase botonHastaArriba
const scrollearHastaArriba = document.querySelector(".botonHastaArriba")
//Esta es la acción que se ejecutaría al hacer click:
scrollearHastaArriba.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})




const elemento = document.getElementById("elemento-seleccionado");
elemento.scrollIntoView({ behavior: 'smooth' });

