const track = document.querySelector(".slider-track");
const dots = document.querySelectorAll(".dot");

let index = 0;
let startX = 0;

function updateSlider() {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(d => d.classList.remove("active"));
  dots[index].classList.add("active");
}

track.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

track.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;

  if (Math.abs(diff) < 40) return;

  if (diff > 0 && index < dots.length - 1) {
    index++;
  } else if (diff < 0 && index > 0) {
    index--;
  }

  updateSlider();
});

