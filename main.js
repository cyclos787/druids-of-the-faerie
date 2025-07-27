// --------------------------------------
// Responsive Navigation for mobile

var navResponsive = document.getElementsByTagName('nav')[0];
var navButton = document.getElementById('nav-button');
var dropdown = document.getElementsByClassName('dropdown')[0];

function toggleNav() {
  navResponsive.classList.toggle("menu-open");
  navButton.classList.toggle("menu-open");
}

function toggleDropdown() {
  dropdown.classList.toggle("open");
}
