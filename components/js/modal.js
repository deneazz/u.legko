const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelectorAll(".btn-modal");
const closeModalBtn = document.querySelector(".btn-close");

// close modal function
const closeModal = function () {
  modal.classList.add("hidden-modal");
  overlay.classList.add("hidden-modal");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden-modal")) {
    closeModal();
  }
});

// open modal function
const openModal = function () {
  modal.classList.remove("hidden-modal");
  overlay.classList.remove("hidden-modal");
};
// open modal event
for (i = 0; i < openModalBtn.length; i++) {
  openModalBtn[i].addEventListener("click", openModal);
}


// далее скрипт для модалки акции

var modalSales = document.querySelector(".modal-sales");
var openModalSalesBtn = document.querySelector(".header-btn-sales");
var arrow = document.querySelector(".btn-more-more");

openModalSalesBtn.addEventListener("click", openModalSales);

function openModalSales() {
  if (modalSales.classList.contains("hidden-modal-opacity")) { // закрыто
    modalSales.classList.remove("hidden-modal-opacity");
    modalSales.classList.add("vis-modal-opacity");
    arrow.style.transform = "rotate(180deg)";
  }
  else { // открыто
    closeModalSales();
  }
}
function closeModalSales(){
  modalSales.classList.remove("vis-modal-opacity");
  modalSales.classList.add("hidden-modal-opacity");
  arrow.style.transform = "rotate(0deg)";
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modalSales.classList.contains("hidden-modal-opacity")) {
    closeModalSales();
  }
});

document.addEventListener("click", function(e) {
  let modal = document.querySelector(".header-btn-cont-sales");

  if (e.target !== modal && !modal.contains(e.target)) {
      closeModalSales();
  }
});