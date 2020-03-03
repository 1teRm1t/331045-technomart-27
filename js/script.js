var link = document.querySelector(".js-popup-link")

var popup = document.querySelector(".modal-feedback")
var close = popup.querySelector(".modal-close")

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});



var mapLink = document.querySelector(".js-map-link")

var mapPopup = document.querySelector(".modal-map")
var mapClose = mapPopup.querySelector(".modal-close")

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});
