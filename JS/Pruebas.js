document.getElementById("openPopup").addEventListener("click", function () {
  document.getElementById("popup").style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});

const openProyectButtons = document.querySelectorAll("[data-Job4Me-target]");
const closeProyectButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openProyectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const Job4Me = document.querySelector(button.dataset.Job4MeTarget);
    openJob4Me(Job4Me);
  });
});

closeProyectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const Job4Me = button.closest(".Job4Me");
    closeJob4Me(Job4Me);
  });
});

function openJob4Met(Job4Me) {
  if (Job4Me == null) return;
  Job4Me.classList.add("active");
  overlay.classList.add("active");
}

function closeJob4Me(Job4Me) {
  if (Job4Me == null) return;
  OtraCiudad.classList.remove("active");
  overlay.classList.remove("active");
}
