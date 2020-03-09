var buyLink = document.querySelectorAll(".js-buy");

var buyPopup = document.querySelector(".modal-add-to-cart");
var buyBtnClose = buyPopup.querySelector(".btn-continue");
var buyClose = buyPopup.querySelector(".modal-close");

for (var i = 0; i < buyLink.length; i++)
buyLink[i].addEventListener("click", function (evt) {
  evt.preventDefault();
  buyPopup.classList.add("modal-show");
});

buyBtnClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  buyPopup.classList.remove("modal-show");
})

buyClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (buyPopup.classList.contains("modal-show")) {
      buyPopup.classList.remove("modal-show");
    }
  }
});

