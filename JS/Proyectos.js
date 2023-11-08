let Boton1 = document.getElementById("UButton");
let Boton2 = document.getElementById("GButton");
let seccionContenedor1 = document.getElementById("UX");
let seccionContenedor2 = document.getElementById("GameDesign");
let popupButton1 = document.getElementById("pop1");
let closeButton = document.getElementById("Regresar");
let popupContainer = document.getElementById("Job4Me");
let closeButton2 = document.getElementById("Regresar2");
let popupButton2 = document.getElementById("pop2");
let popupContainer2 = document.getElementById("OtraCiudad");
let closeButton3 = document.getElementById(".Regresar3");
let popupButton3 = document.getElementById("pop3");
let popupContainer3 = document.getElementById("Cibernexo");
// let closeButton4 = document.getElementById(".Regresar4");
// let popupButton4 = document.getElementById("pop4");
// let popupContainer4 = document.getElementById("OtraCiudad");
// let closeButton5 = document.getElementById(".Regresar5");
// let popupButton5 = document.getElementById("pop5");
// let popupContainer5 = document.getElementById("OtraCiudad");
let overlay = document.querySelector(".overlay");
let btnsizeU = document.getElementById("Ubutton");
let btnsizeG = document.getElementById("GButton");

// Selector de contenido

Boton1.addEventListener("click", () => {
  desactivarcontenedores(seccionContenedor1);
});
Boton2.addEventListener("click", () => {
  desactivarcontenedores(seccionContenedor2);
  btnsizeU.classList.toggle("active");
});

function desactivarcontenedores(elemento) {
  seccionContenedor1.style.display = "none";
  seccionContenedor2.style.display = "none";
  elemento.style.display = "flex";
}

// Pop Up

popupButton1.addEventListener("click", () => {
  popupContainer.classList.toggle("active");
  overlay.classList.toggle("active");
});
closeButton.addEventListener("click", () => {
  popupContainer.classList.toggle("active");
  overlay.classList.toggle("active");
});

popupButton2.addEventListener("click", () => {
  popupContainer2.classList.toggle("active");
  overlay.classList.toggle("active");
});
closeButton2.addEventListener("click", () => {
  popupContainer2.classList.toggle("active");
  overlay.classList.toggle("active");
});

popupButton3.addEventListener("click", () => {
  popupContainer3.classList.toggle("active");
  overlay.classList.toggle("active");
});
closeButton3.addEventListener("click", () => {
  popupContainer3.classList.toggle("active");
  overlay.classList.toggle("active");
});
