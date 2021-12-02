const boxHover = document.querySelector(".card__image");
const view = document.querySelector(".image__view");

boxHover.addEventListener("mouseenter", function() {
    view.classList.add('vedi');
});
boxHover.addEventListener("mouseleave", function() {
    view.classList.remove('vedi');
});