//Back button:
function goBack() {
  window.history.back();
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 60px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});

// Initial scroll position
var scrollState = 0;

// Store navbar classes
var navClasses = document.getElementById("navBar").classList;

// returns current scroll position
var scrollTop = function () {
  return window.scrollY;
};

// Primary scroll event function
var scrollDetect = function (home, down, up) {
  // Current scroll position
  var currentScroll = scrollTop();
  if (scrollTop() === 0) {
    home();
  } else if (currentScroll > scrollState) {
    down();
  } else {
    up();
  }
  // Set previous scroll position
  scrollState = scrollTop();
};

function homeAction() {
  console.log("home");
}

function downAction() {
  navClasses.remove("open");
  navClasses.add("collapse");
}

function upAction() {
  navClasses.remove("collapse");
  navClasses.add("open");
}

window.addEventListener("scroll", function () {
  scrollDetect(homeAction, downAction, upAction);
});
