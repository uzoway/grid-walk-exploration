"use strict";

gsap.registerPlugin(CustomEase);

function initializeAnimation() {}

window.addEventListener("DOMContentLoaded", initializeAnimation);

document.addEventListener("keydown", (event) => {
  if (event.shiftKey && event.key.toLowerCase() === "g") {
    document.querySelector(".overlay").classList.toggle("active");
  }
});
