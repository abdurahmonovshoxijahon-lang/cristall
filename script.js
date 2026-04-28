let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
  slides.forEach(s => s.classList.remove("active"));
  slides[i].classList.add("active");
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

setInterval(nextSlide, 4000);


document.getElementById("posterCatalogBtn").addEventListener("click", function () {
  document.getElementById("headerCatalogBtn").click();
});



