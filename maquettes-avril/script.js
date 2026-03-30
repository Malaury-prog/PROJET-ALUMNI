// GESTION CARROUSELS INDÉPENDANTS
const carousels = {
  "desktop-carousel": 0,
  "mobile-carousel": 0,
};

function moveSlide(id, direction) {
  const track = document.querySelector(`.${id} .carousel-track`);
  const slides = track.querySelectorAll("img");
  const total = slides.length;

  carousels[id] = (carousels[id] + direction + total) % total;
  track.style.transform = `translateX(${carousels[id] * -100}%)`;
}

// ZOOM MODAL
function zoomImage(el) {
  const modal = document.getElementById("zoomModal");
  const modalImg = document.getElementById("imgZoomed");
  modal.style.display = "block";
  modalImg.src = el.src;
}

function closeZoom() {
  document.getElementById("zoomModal").style.display = "none";
}

// FERMETURE ESCAPE
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeZoom();
});
