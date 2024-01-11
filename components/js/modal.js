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
for(i=0;i<openModalBtn.length;i++){
    openModalBtn[i].addEventListener("click", openModal);
}
