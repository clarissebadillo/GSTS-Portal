// NAVIGATION BAR EFFECT
window.onscroll = function() {navFunction()};

var mainNav = document.querySelector(".main-nav");
var sticky = mainNav.offsetTop;

function navFunction() {
  if (window.pageYOffset >= sticky) {
    mainNav.classList.add("sticky")
  } else {
    mainNav.classList.remove("sticky");
  }
} 

//NAVIGATION BAR RESP