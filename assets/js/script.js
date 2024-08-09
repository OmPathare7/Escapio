'use strict';

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
});



/**
 * show go top btn when scroll window to 500px
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500 ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});

const reviewsLink = document.querySelector("[href='#reviews']");

reviewsLink.addEventListener("click", () => {
  const reviewsSection = document.querySelector("#reviews");
  reviewsSection.scrollIntoView({ behavior: "smooth" });
});

const destinationsLink = document.querySelector("[href='#destinations']");

destinationsLink.addEventListener("click", () => {
  const destinationsSection = document.querySelector("#destinations");
  destinationsSection.scrollIntoView({ behavior: "smooth" });
});

const blogsLink = document.querySelector("[href='#blogs']");

blogsLink.addEventListener("click", () => {
  const latestCinematicsSection = document.querySelector("#latest-cinematics");
  latestCinematicsSection.scrollIntoView({ behavior: "smooth" });
});

const contactUsLink = document.querySelector("[href='#contact-us']");

contactUsLink.addEventListener("click", () => {
  const contactUsSection = document.querySelector("#contact-us");
  contactUsSection.scrollIntoView({ behavior: "smooth" });
});

const homeLink = document.querySelector("[href='#home']");

homeLink.addEventListener("click", () => {
  location.reload();
});