document.addEventListener("DOMContentLoaded", (event) => {

let sections = document.getElementsByTagName("section");
let firstSection = sections[0];
let secondSection = sections[1];
let thirdSection = sections[2];
let fourthSection = sections[3];


window.addEventListener("scroll", (event) => {
  if (window.scrollY > 0) {
    firstSection.classList.add("fadeIn");
  }
  if (window.scrollY > 500) {
    secondSection.classList.add("fadeIn");
  }
  if (window.scrollY > 1200) {
    thirdSection.classList.add("fadeIn");
  }
  if (window.scrollY > 1700) {
    fourthSection.classList.add("fadeIn");
  }
});


});