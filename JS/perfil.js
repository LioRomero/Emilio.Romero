const sliderContainer = document.getElementById("slider-container");
const slides = document.querySelectorAll(".slider-slide");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Mostrar el primer slide
showSlide(currentIndex);

// Codigo dedl curosr
let mouseCursor = document.querySelector(".cursor");

window.addEventListener("DOMContentLoaded", cursor);
window.addEventListener("mousemove", cursor);
document.addEventListener(
  "mouseenter",
  () => (mouseCursor.style.display = "block")
);
document.addEventListener(
  "mouseleave",
  () => (mouseCursor.style.display = "none")
);

function cursor(e) {
  mouseCursor.style.top = "calc(" + e.clientY + "px - 1rem)";
  mouseCursor.style.left = "calc(" + e.clientX + "px - 1rem)";
}
