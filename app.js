let ats = document.querySelector(".ats")
let bwa = document.querySelector(".bwa")
let hero = document.querySelector(".hero")

window.addEventListener("scroll", () =>{
  let value = window.scrollY
  ats.style.top = value * -0.9 + "px"
  bwa.style.top = value * -0.9 + "px"
  hero.style.marginTop = value * -0.9 + "px"
  
});

let panahKanan = document.querySelector(".panah-kanan")
let panahkiri = document.querySelector(".panah-kiri")

panahKanan.addEventListener("click", () => {
  document.querySelectorAll(".kabur").forEach((el) => {
    el.style.transform = "translateX(-588px)";
  });

  panahKanan.style.opacity = "0"
  panahKanan.style.pointerEvents = "none"
  panahkiri.style.opacity = "1"
  panahkiri.style.pointerEvents = "all"

  
});

panahkiri.addEventListener("click", () => {
  document.querySelectorAll(".kabur").forEach((el) => {
    el.style.transform = "translateX(0px)";
  });

  panahKanan.style.opacity = "1"
  panahKanan.style.pointerEvents = "all"
  panahkiri.style.opacity = "0"
  panahkiri.style.pointerEvents = "none"
  
});

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const dots = document.querySelectorAll(".dot");

let index = 0;
const totalSlides = slides.length;
const slidesPerView = 3;

// Fungsi untuk update slider
function updateSlider() {
    const translateX = -index * (100 / slidesPerView);
    slider.style.transform = `translateX(${translateX}%)`;

    // Update active dot
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

// Tombol next
nextButton.addEventListener("click", () => {
    if (index < totalSlides - slidesPerView) {
        index++;
    } else {
        index = 0;
    }
    updateSlider();
});

// Tombol prev
prevButton.addEventListener("click", () => {
    if (index > 0) {
        index--;
    } else {
        index = totalSlides - slidesPerView;
    }
    updateSlider();
});

// Klik dot pagination
dots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => {
        index = dotIndex;
        updateSlider();
    });
});

// Update slider saat load pertama
updateSlider();


