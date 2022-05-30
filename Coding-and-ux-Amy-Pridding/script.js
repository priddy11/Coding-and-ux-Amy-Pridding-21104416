// create variables for required HTML elements
const lightMode = document.getElementById("light-mode-sun");
const darkMode = document.getElementById("dark-mode-moon");
const body = document.getElementsByTagName("body").item(0);
const pageNav = document.getElementById("page-nav");
const navLinks = document.getElementsByClassName("nav-link");
const cards = document.getElementsByClassName("trending-crypto");
const footer = document.getElementById("footer");
const footerLinks = document.querySelectorAll(".page-footer a");
const toggle = document.getElementById("switch");
const grayContainers = document.getElementsByClassName("gray-container");
const toggleInput = document.querySelector("#switch input");

// changes page features based on whether light or dark mode is active
function toggleDarkMode() {

  if (lightMode.hidden) {
    // unhide sun icon and hide moon icon
    lightMode.removeAttribute("hidden");
    darkMode.hidden = true;

    // remove dark mode CSS classes
    body.classList.remove("dark-mode");
    pageNav.classList.remove("page-nav-dark-mode");
    footer.classList.remove("footer-dark-mode");
    toggle.classList.remove("switch-dark-mode");

    removeCSSFromList(navLinks, "nav-link-dark-mode");
    removeCSSFromList(cards, "card-dark-mode");
    removeCSSFromList(footerLinks, "footer-link-dark-mode");
    removeCSSFromList(grayContainers, "dark-mode-gray-container");
  } 
  else {
    // hide sun icon and unhide moon icon
    lightMode.hidden = true;
    darkMode.removeAttribute("hidden");

    // add dark mode CSS classes
    body.classList.add("dark-mode");
    pageNav.classList.add("page-nav-dark-mode");
    footer.classList.add("footer-dark-mode");
    toggle.classList.add("switch-dark-mode");

    addCSSToList(navLinks, "nav-link-dark-mode");
    addCSSToList(cards, "card-dark-mode");
    addCSSToList(footerLinks, "footer-link-dark-mode");
    addCSSToList(grayContainers, "dark-mode-gray-container");
  }
}

// // loops through list of HTML elements, removing the specified CSS class
function removeCSSFromList(elements, cssClass) {
  for (var i=0; i<elements.length; i++) {
    elements.item(i).classList.remove(cssClass);
  }
}

// loops through list of HTML elements, adding the specified CSS class
function addCSSToList(elements, cssClass) {
  for (var i=0; i<elements.length; i++) {
    elements.item(i).classList.add(cssClass);
  }
}

// imports google translate dropdown, taken from this example:
// https://www.w3schools.com/howto/howto_google_translate.asp
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

// changes contact form field outline to green/red if input is valid/invalid
function validateInput(inputId) {
  const input = document.getElementById(inputId);
  
  if (input.checkValidity()) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  }
  else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}

// fixes issue where toggle is unchecked when navigating to page via back arrow
function checkToggle() {
  toggleInput.checked = true;
}

document.onkeydown = darkModeWithKeys;
document.onkeyup = darkModeWithKeys;

var pressedKeys = {};

// toggle dark mode when ctrl + alt + d is clicked, followed example found here:
// https://stackoverflow.com/questions/5203407/how-to-detect-if-multiple-keys-are-pressed-at-once-using-javascript
function darkModeWithKeys(e){
  pressedKeys[e.key] = e.type == 'keydown';

  if(pressedKeys["Control"] && pressedKeys["Alt"] && pressedKeys["d"]) { // ctrl+alt+d
    toggleInput.checked = !toggleInput.checked;
    toggleDarkMode();
  }

  if(pressedKeys["Control"] && pressedKeys["Alt"] && pressedKeys["∂"]) { // ctrl+option+d for mac
    toggleInput.checked = !toggleInput.checked;
    toggleDarkMode();
  }
}
