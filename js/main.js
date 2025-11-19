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

const getCardsPerView = () => {
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 768) return 2;
  if (window.innerWidth < 1024) return 3;
  return 4;
};

const updateCarousel = () => {
  const cardsPerView = getCardsPerView();
  const gap = -20;
  const cardWidth = track.offsetWidth / cardsPerView;
  const offset = currentIndex * (cardWidth + gap);

  track.style.transform = `translateX(-${offset}px)`;

  const maxIndex = cards.length - cardsPerView;
  prevBtn.classList.toggle("opacity-30", currentIndex === 0);
  prevBtn.classList.toggle("pointer-events-none", currentIndex === 0);
  nextBtn.classList.toggle("opacity-30", currentIndex === maxIndex);
  nextBtn.classList.toggle("pointer-events-none", currentIndex === maxIndex);
};

nextBtn.addEventListener("click", () => {
  const maxIndex = cards.length - getCardsPerView();
  if (currentIndex < maxIndex) currentIndex++;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) currentIndex--;
  updateCarousel();
});

window.addEventListener("resize", updateCarousel);

updateCarousel();
