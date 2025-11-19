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
});

// * -- carousel below --
 
const track = document.getElementById("carouselTrack");
const cards = document.querySelectorAll(".carousel-card");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
const maxIndex = 1;
const cardsPerView = 4;
const totalCards = cards.length;

const updateCarousel = () => {
  const offset = -(currentIndex * (100 / cardsPerView));
  track.style.transform = `translateX(${offset}%)`;
};

const updateButtons = () => {
  prevBtn.classList.toggle("opacity-30", currentIndex === 0);
  prevBtn.classList.toggle("pointer-events-none", currentIndex === 0);

  nextBtn.classList.toggle("opacity-30", currentIndex === maxIndex);
  nextBtn.classList.toggle("pointer-events-none", currentIndex === maxIndex);
};

nextBtn.addEventListener("click", () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateCarousel();
    updateButtons();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
    updateButtons();
  }
});

updateButtons();
