const navToggle = document.getElementById("navToggle");
const iconMenu = document.getElementById("iconMenu");
const iconClose = document.getElementById("iconClose");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  iconMenu.classList.toggle("hidden");
  iconClose.classList.toggle("hidden");

  if (navMenu.style.maxHeight) {
    navMenu.style.maxHeight = null;
  } else {
    navMenu.style.maxHeight = navMenu.scrollHeight + "px";
  }
})

// carousel

const carousel = document.getElementById("carousel");
const cards = document.querySelectorAll(".carousel-card");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
const totalCards = cards.length;

const updateCarousel = () => {
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalCards;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalCards) % totalCards;
  updateCarousel();
});
