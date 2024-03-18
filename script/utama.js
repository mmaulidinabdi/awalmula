// import 'bootstrap';

let currentIndex = 0;
let autoplayInterval;

function showSlide(index) {
  const carouselInner = document.querySelector(".inner-carousel");
  const totalSlides = document.querySelectorAll(".item-carousel").length;
  index = (index + totalSlides) % totalSlides;
  currentIndex = index;
  const translateValue = -index * 100 + "%";
  carouselInner.style.transform = "translateX(" + translateValue + ")";
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, 3000);
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

startAutoplay();

const carouselContainer = document.querySelector(".container-carousel");
carouselContainer.addEventListener("mouseenter", stopAutoplay);
carouselContainer.addEventListener("mouseleave", startAutoplay);

// search
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", function (event) {
  const searchQuery = searchInput.value.toLowerCase();

  if (searchQuery.includes("diamond")) {
    searchInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        const searchQuery = searchInput.value.toLowerCase();

        if (searchQuery.includes("diamond")) {
          window.location.href = "#diamond";
        }
      }
    });
  }

  if (searchQuery.includes("weekly")) {
    searchInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        const searchQuery = searchInput.value.toLowerCase();

        if (searchQuery.includes("weekly")) {
          window.location.href = "#wdp";
        }
      }
    });
  }
});

document.querySelector(".btn-utama").addEventListener("click", function () {
  // Scroll to the container-carousel section
  document
    .querySelector(".container-carousel")
    .scrollIntoView({ behavior: "smooth" });
});

const navbar = document.getElementById("navbar-utama");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

