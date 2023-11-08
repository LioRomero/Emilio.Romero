let Boton1 = document.getElementById("BPersona");
let Boton2 = document.getElementById("BProyectos");
let Boton3 = document.getElementById("BConocimiento");
let Boton4 = document.getElementById("BContacto");

let seccionContenedor1 = document.getElementById("SPersona");
let seccionContenedor2 = document.getElementById("SProyectos");
let seccionContenedor3 = document.getElementById("SConocimientos");
let seccionContenedor4 = document.getElementById("SContacto");

Boton1.addEventListener("click", () => {
  desactivarcontenedores(seccionContenedor1);
  document.getElementById("inicio").style.backgroundImage =
    "url('../images/Fondo.png')";
  document.getElementById("inicio").style.backgroundSize = "contain";
});
Boton2.addEventListener("click", () => {
  desactivarcontenedores(seccionContenedor2);
  document.getElementById("inicio").style.backgroundImage =
    "url('../images/Fondo proyecto .png')";
  document.getElementById("inicio").style.backgroundSize = "contain";
});
Boton3.addEventListener("click", () => {
  desactivarcontenedores(seccionContenedor3);
  document.getElementById("inicio").style.backgroundImage =
    "url('/images/Fondo conocimientos .png')";
  document.getElementById("inicio").style.backgroundSize = "contain";
});
Boton4.addEventListener("click", () => {
  desactivarcontenedores(seccionContenedor4);
  document.getElementById("inicio").style.backgroundImage =
    "url('../images/Fondo contacto .png')";
  document.getElementById("inicio").style.backgroundSize = "100% 100%";
});

function desactivarcontenedores(elemento) {
  seccionContenedor1.style.display = "none";
  seccionContenedor2.style.display = "none";
  seccionContenedor3.style.display = "none";
  seccionContenedor4.style.display = "none";
  elemento.style.display = "flex";
}

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;
let timer;

function moveSlider() {
  slider.style.transform = `translateX(-${currentIndex * 500}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  moveSlider();
  clearInterval(timer);
  timer = setTimeout(nextSlide, 8000); // Detiene el temporizador por 20 segundos
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  moveSlider();
  clearInterval(timer);
  timer = setTimeout(nextSlide, 8000); // Detiene el temporizador por 20 segundos
}

// Inicia el temporizador
timer = setTimeout(nextSlide, 1000);

//esta funcion lo que permite es activar y desactivar el display de cada elemento dependiendo del boton que se activ3e, sin embargo no modifica el display desde la hoja de estilos sino en html
