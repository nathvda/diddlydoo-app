//Cette fonction prend un string comme argument
//et vérifie si ce string contient min 1 caractère, et max 256 caractères.
export default function validateInput(e) {
  let form = document.getElementById("myform");
  let err = document.getElementById("errorName");
  let names = ["name", "author", "description"];
  let submit = true;
  for (let n of names) {
    if (form[n].value == "") {
      form[n].nextElementSibling.nextElementSibling.textContent =
        "This field must be filled";
      form[n].nextElementSibling.nextElementSibling.style.color = "red";
      e.preventDefault();
      submit = false;
    } else if (form[n].value.length > 256) {
      form[n].nextElementSibling.nextElementSibling.textContent =
        "This field must contain at leat 256 characters";
      e.preventDefault();
      submit = false;
    }
  }
  if (submit == true) {
    form.reset();
    for (let n of names) {
      form[n].nextElementSibling.nextElementSibling.textContent = "";
    }
  }
}
