let more = document.getElementsByClassName("more");
let moreBtns = document.getElementsByClassName("btn-more");
let moreText = document.getElementsByClassName("more-text");
let openContent = document.getElementsByClassName("hidden-content");
let cnt = 0;

for (let i = 0; i < more.length; i++) {
    more[i].addEventListener('click', () => {
        if (inp2.checked) { // см. courses-toggle&slider.js
            if (openContent[i].classList.contains("hidden")) { // закрыто
                openContent[i].classList.toggle("hidden");
                moreBtns[i].style.transform = "rotate(180deg)";
                moreText[i].innerHTML = "Скрыть";
            }
            else{ // открыто
                openContent[i].classList.toggle("hidden");
                moreBtns[i].style.transform = "rotate(0deg)";
                moreText[i].innerHTML = "Подробнее";
            }
        }
        else {
            if (openContent[i].classList.contains("hidden")) { // закрыто
                openContent[i].classList.toggle("hidden");
                moreBtns[i].style.transform = "rotate(180deg)";
                moreText[i].innerHTML = "Скрыть";
                setCoursesHeight();
            }
            else{ // открыто
                openContent[i].classList.toggle("hidden");
                moreBtns[i].style.transform = "rotate(0deg)";
                moreText[i].innerHTML = "Подробнее";
                setCoursesHeight();
            }
        }
    });
}