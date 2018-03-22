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

//get modal elements
let modal = document.getElementById("simpleModal");
//get open modal
let modalBtn = document.getElementById("modalBtn");
// get close button
let closeBtn = document.getElementsByClassName("closeBtn")[0];

//listen for click on modal btn
modalBtn.addEventListener("click", (openModal) => {
  modal.style.display = "block";
});
closeBtn.addEventListener("click", (closeModal) => {
  modal.style.display = "none";
});

//listen for click outside modal window to close modal
window.addEventListener("click", clickOutside); 

function clickOutside(event) {
  if(event.target == modal) {
  modal.style.display = "none";
  }
};

});