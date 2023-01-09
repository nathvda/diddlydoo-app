import editElement from "./editElement.js";
import readElement from "./readElement.js";
import generateElement from "./displayElement.js";
import validateInput from "./validateInput.js";
import findBestPossibleDate from "./findBestPossibleDate.js";
import editModeToggle from "./editModeToggle.js";
import addDateOnClick from "./addSupprDateOnClick.js";

window.addEventListener("load", readElement);

let myForm = document.getElementById("myform");
myForm.addEventListener("submit", validateInput);

let addDate = document.getElementById("addDate");
addDate.addEventListener('click', addDateOnClick);

let displayForm = document.getElementById('menu');
let menuForm = document.getElementsByClassName('addEvent')[0];
console.log(menuForm);
console.log(displayForm);
displayForm.addEventListener('click', () => {
    if(menuForm.style.display == 'none' || menuForm.style.display =='') {
        menuForm.style.display = 'block';
    }
    else {
        menuForm.style.display = 'none';
    }
})