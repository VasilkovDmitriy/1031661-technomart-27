let popup = document.querySelector('.catalog__popup');
let popupToggle = document.querySelectorAll('.catalog-item__buy');
let popupClose = document.querySelector('.catalog-popup__close');



popupToggle.forEach(item => {
    item.onclick = () => { popup.style.display = "block" }
})

popupClose.onclick = () => {
    popup.style.display = "none";
}

window.onclick = (e) => {
    if (e.target == popup) popup.style.display = "none";
}    