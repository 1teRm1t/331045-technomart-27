var buyLink = document.querySelector(".js-buy")

var buyPopup = document.querySelector(".modal-add-to-cart")
var buyClose = buyPopup.querySelector(".modal-close")

buyLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  buyPopup.classList.add("modal-show");
});

buyClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  buyPopup.classList.remove("modal-show");
});
