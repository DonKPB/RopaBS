const imagenes = document.querySelectorAll(".img-galeria")
const imagenesligt = document.querySelector(".agregar-imagen")
const contenedorligt = document.querySelector(".imagen-light")
const hamburguer1 = document.querySelector(".hamburguer")


imagenes.forEach(imagen =>{
    imagen.addEventListener("click", ()=>{
        aparecerImagen(imagen.getAttribute("src"))
    })
})


contenedorligt.addEventListener("click", (e)=>{
    if(e.target != imagenesligt){
        contenedorligt.classList.toggle("show")
        imagenesligt.classList.toggle("showImage")
        hamburguer1.style.opacity = "1"
    }
})


const aparecerImagen = (imagen)=>{
    imagenesligt.src = imagen;
    contenedorligt.classList.toggle("show")
    imagenesligt.classList.toggle("showImage")
    hamburguer1.style.opacity = "0"
}