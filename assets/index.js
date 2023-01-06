import editElement from "./editElement.js";
import readElement from "./readElement.js";
import generateElement from "./displayElement.js";
import validateInput from "./validateInput.js";
import findBestPossibleDate from "./findBestPossibleDate.js";
import editModeToggle from "./editModeToggle.js";

window.addEventListener("load", readElement);

let myForm = document.getElementById("myform");
myForm.addEventListener("submit", validateInput);
