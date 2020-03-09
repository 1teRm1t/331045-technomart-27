var link = document.querySelector(".js-popup-link");

var popup = document.querySelector(".modal-feedback");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");
var close = popup.querySelector(".modal-close");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});



var mapLink = document.querySelector(".js-map-link");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});



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
});

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
