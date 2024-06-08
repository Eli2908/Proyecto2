// menu

function toggleMenu() {
  const navUl = document.querySelector("nav ul");
  navUl.classList.toggle("show");
}

let slideIndex = 0;
showSlides(slideIndex);

function nextSlide() {
  showSlides((slideIndex += 1));
}

function prevSlide() {
  showSlides((slideIndex -= 1));
}

function showSlides(n) {
  const slides = document.querySelectorAll(".carousel-item");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let slide of slides) {
    // slide.style.transform = `translateX(-${slideIndex * 100}%)`;
  }
}

// Función para cambiar automáticamente cada 3 segundos
function autoSlide() {
  nextSlide();
  setTimeout(autoSlide, 3000); // Cambia el slide cada 3 segundos
}

autoSlide(); // Inicia el cambio automático

// contactanos

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

//Producto
// function showSection(sectionId) {
//   // Ocultar todas las secciones
//   var sections = document.getElementsByClassName("section");
//   for (var i = 0; i < sections.length; i++) {
//     sections[i].style.display = "none";
//   }
//   // Mostrar la sección seleccionada
//   var section = document.getElementById(sectionId);
//   section.style.display = "block";
// }

function showSection(sectionId) {
  // Ocultar todas las secciones
  var sections = document.getElementsByClassName("section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }
  // Mostrar la sección seleccionada
  var section = document.getElementById(sectionId);
  section.style.display = "block";
}
