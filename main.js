document.addEventListener("DOMContentLoaded", (event) => {

let sections = document.getElementsByTagName("section");
let firstSection = sections[0];
let secondSection = sections[1];
let thirdSection = sections[2];
let fourthSection = sections[3];


window.addEventListener("scroll", (event) => {
  if (window.pageYOffset > 0) {
    firstSection.classList.add("fadeIn");
  } 
  if (window.pageYOffset > 500) {
    secondSection.classList.add("fadeIn");
  }
  if (window.pageYOffset > 1100) {
    thirdSection.classList.add("fadeIn");
  }
  if (window.pageYOffset > 1600) {
    fourthSection.classList.add("fadeIn");
  }
});

// document.querySelector("panel1").style.backgroundColor = "#FFB169";

});