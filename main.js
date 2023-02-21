"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const showModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");

// add hidden modal function
const addHiddenModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// remove hidden modal function
const removeHiddenModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

showModal.forEach((element) => {
  element.addEventListener("click", removeHiddenModal);
});

btnCloseModal.addEventListener("click", addHiddenModal);
overlay.addEventListener("click", addHiddenModal);

// key press

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden"))
    // console.log(modal.classList.contains('modal')) // true;
    // console.log(modal.classList.contains('hidden')); // false;
    addHiddenModal();
});
