const Imagenes=document.querySelectorAll(".container-img")

Imagenes.forEach(imagen=>{
  imagen.addEventListener("click",()=>{
    RemoveActive();
    imagen.classList.add("active")
  })
})

function RemoveActive() {
  Imagenes.forEach(imagen => {
      imagen.classList.remove("active")
  })
}