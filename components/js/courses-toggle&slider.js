let inp1 = document.querySelector("#r1");
let inp2 = document.querySelector("#r2");
let label1 = document.querySelector("#courses-menu-option1");
let label2 = document.querySelector("#courses-menu-option2");
let und1 = document.querySelector("#underline1");
let und2 = document.querySelector("#underline2");

inp1.addEventListener("change", checkChecked);
inp2.addEventListener("change", checkChecked);
document.addEventListener("DOMContentLoaded", checkChecked);

function checkChecked() {
    if (inp1.checked) {
        und1.classList.add("vis");
        und2.classList.remove("vis");
    }
    else {
        und1.classList.remove("vis");
        und2.classList.add("vis");
    }
}

const slider = document.querySelector(".slider");
const slide = document.querySelector(".slider-slide");

function handlesliderMove(positive = true) {
  const slideWidth = slide.clientWidth;
  slider.scrollLeft = positive ? slider.scrollLeft + slideWidth : slider.scrollLeft - slideWidth;
}