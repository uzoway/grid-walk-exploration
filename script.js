"use strict";

gsap.registerPlugin(CustomEase);
CustomEase.create("ease-in-out-quart", "0.77,0,0.175,1");

document.addEventListener("keydown", (event) => {
  if (event.shiftKey && event.key.toLowerCase() === "g") {
    document.querySelector(".c-grid_overlay").classList.toggle("cc-is-visible");
  }
});

const initAnimation = () => {
  const loaderTl = gsap.timeline({ delay: 1 });

  loaderTl
    .to("[data-loader-text]", {
      y: 0,
      stagger: 0.17,
      ease: "power4.out",
      duration: 0.55,
    })
    .to(
      "[data-loader-text]",
      {
        y: -100,
        stagger: 0.17,
        ease: "power4.in",
        duration: 0.65,
      },
      "+=0.575"
    )
    .to(".c-grid_block", {
      scaleX: "0",
      transformOrigin: "left",
      ease: "ease-in-out-quart",
      stagger: 0.02,
      duration: 0.725,
      onComplete: () => gsap.set(".c-loader", { pointerEvents: "none" }),
    });
};

document.addEventListener("DOMContentLoaded", initAnimation);
