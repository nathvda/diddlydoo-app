import editEvent from "./editEvent.js";
import addElement from "./addElement.js";
import generateElement from "./displayElement.js";

let test = document.getElementById("test");
test.addEventListener("click", addElement);
test.addEventListener("click", editEvent);

generateElement(
  "Joyeux Noel",
  "20930239",
  "Une petite fête posée",
  "le grand architecte",
  ["2022-02-01", "2022-02-05", "2022-02-10"],
  ["John", "Marie", "Judas"]
);
