var slideIndex = 1;
var slides = document.getElementsByClassName("slides");

function plusSlides(n) {
    console.log("plusSlides Slide Changed to " + slideIndex);
  showSlides(slideIndex += n);
}

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  console.log("showSlides Slide Changed to " + slideIndex);
}

showSlides(slideIndex);
