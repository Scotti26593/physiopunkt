"use strict";

// NAVIGATION BAR //
////////////////////
////////////////////
////////////////////
////////////////////
// NAVIGATION BAR //

const closeButton = document.querySelector(".nav-btn-close");
const openButton = document.querySelector(".nav-btn-open");

const header = document.querySelector("header");

//OPEN AND CLOSE FUNCTIONS
const open = function () {
  header.classList.add("nav-open");
};
const close = function () {
  header.classList.remove("nav-open");
};
//ADD EVENT LISTENERS

closeButton.addEventListener("click", function () {
  if ("click") {
    close();
  }
});

openButton.addEventListener("click", function () {
  if ("click") {
    open();
  }
});

//SMOOTH SCROLLING//
////////////////////
////////////////////
////////////////////
////////////////////
////////////////////
//SMOOTH SCROLLING//

const allinks = document.querySelectorAll("a:link");

allinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault;
    const href = link.getAttribute("href");

    console.log(href);

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("navigation-link")) {
      header.classList.remove("nav-open");
    }
  });
});

//ADDING STICKING NAVIGATION//
////////////////////
////////////////////
////////////////////
////////////////////
////////////////////
//ADDING STICKING NAVIGATION//

const sectionHeroElement = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      // adding classes to html elemets via JS.
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      // adding classes to html elemets via JS.
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-60px",
  }
);

obs.observe(sectionHeroElement);

//FORM TEXT BOX////
//FORM TEXT BOX////
//FORM TEXT BOX////
//FORM TEXT BOX////
//FORM TEXT BOX////
//FORM TEXT BOX////
//FORM TEXT BOX////

if (visualViewport.width < 400) {
  alert("hello world");
}

/*
const boxSmall = document.querySelector("box-small");
const boxBig = document.querySelector("box2-big");

if (visualViewport.width < 900) {
  alert("hello world");
}
*/

console.log();
