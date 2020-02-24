let buttonDelivery = document.querySelector('.services__button-delivery');
let buttonGuarantee = document.querySelector('.services__button-guarantee');
let buttonCredit = document.querySelector('.services__button-credit');
const buttonsList = [buttonDelivery, buttonGuarantee, buttonCredit];

let contentDelivery = document.querySelector('.services__content-delivery');
let contentGuarantee = document.querySelector('.services__content-guarantee');
let contentCredit = document.querySelector('.services__content-credit');
const contentsList = [contentDelivery, contentGuarantee, contentCredit];

const buttonActiveClass = "services__button_active";
const contentActiveClass = "services__content_active";

const addClass = (i) => {
    for (let k = 0; k < buttonsList.length; k++) {
        buttonsList[k].classList.remove(buttonActiveClass);
    }

    for (let j = 0; j < contentsList.length; j++) {
        contentsList[j].classList.remove(contentActiveClass);
    }

    buttonsList[i].classList.add(buttonActiveClass);
    contentsList[i].classList.add(contentActiveClass);
}

for (let i = 0; i < buttonsList.length; i++) {
    buttonsList[i].onclick = (e) => { addClass(i) };
}

let mapPopup = document.querySelector('.map__popup');
let mapPopupToggle = document.querySelectorAll('.contacts-section__map');
let mapPopupClose = document.querySelector('.map-popup__close');

let feedbackPopup = document.querySelector('.feedback-form');
let feedbackPopupToggle = document.querySelectorAll('.contacts-section__write-button');
let feedbackPopupClose = document.querySelector('.feedback-form__close');

mapPopupToggle.forEach(item => {
    item.onclick = () => { mapPopup.style.display = "block" }
})

mapPopupClose.onclick = () => {
    mapPopup.style.display = "none";
}

feedbackPopupToggle.forEach(item => {
    item.onclick = () => { feedbackPopup.style.display = "block" }
})

feedbackPopupClose.onclick = () => {
    feedbackPopup.style.display = "none";
}

window.onclick = (e) => {
    if (e.target == feedbackPopup) feedbackPopup.style.display = "none";
    if (e.target == mapPopup) mapPopup.style.display = "none";
}

let inputSearch = document.querySelector(".input-search");
let formSearch = document.querySelector(".header-top__search-form");

inputSearch.onfocus = () => {
    formSearch.classList.add("header-top__search-form_active");
}

inputSearch.onblur = () => {
    formSearch.classList.remove("header-top__search-form_active");
}
