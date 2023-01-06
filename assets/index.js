import editElement from "./editElement.js";
import readElement from "./readElement.js";
import generateElement from "./displayElement.js";
import validateInput from "./validateInput.js";

window.addEventListener("load", readElement);

let myForm = document.getElementById('myform');
myForm.addEventListener('submit', validateInput);
