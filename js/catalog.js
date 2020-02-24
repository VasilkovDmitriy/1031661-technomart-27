let feedbackPopup = document.querySelector('.catalog__popup');
let feedbackPopupToggle = document.querySelectorAll('.catalog-item__buy');
let feedbackPopupClose = document.querySelector('.catalog-popup__close');

feedbackPopupToggle.forEach(item => {
  item.onclick = () => { feedbackPopup.style.display = "block" }
})

feedbackPopupClose.onclick = () => {
  feedbackPopup.style.display = "none";
}

window.onclick = (e) => {
  if (e.target == feedbackPopup) feedbackPopup.style.display = "none";
}

let inputSearch = document.querySelector(".input-search");
let formSearch = document.querySelector(".header-top__search-form");

inputSearch.onfocus = () => {
    formSearch.classList.add("header-top__search-form_active");
}

inputSearch.onblur = () => {
    formSearch.classList.remove("header-top__search-form_active");
}