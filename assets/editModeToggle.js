import editElement from "./editElement.js";

export default function editModeToggle(id, parent) {
  const elem = document.getElementById(id);

  const titre = elem.querySelector(".event__card__name");
  console.log(titre.innerHTML);

  const titreModif = document.createElement("input");
  titreModif.value = titre.innerHTML;
  titreModif.classList.add("event__card__name--editMode");
  console.log(titreModif);

  parent.replaceChild(titreModif, titre);

  const description = elem.querySelector(".event__card__description");
  console.log(description.innerHTML);

  const descriModif = document.createElement("input");
  descriModif.value = description.innerHTML;
  descriModif.classList.add("event__card__description-editMode");

  console.log(descriModif);

  elem.replaceChild(descriModif, description);

  const author = elem.querySelector(".event__card__author");
  console.log(author.innerHTML);

  const authorModif = document.createElement("input");
  authorModif.value = author.innerHTML;
  authorModif.classList.add("event__card__author-editMode");
  console.log(authorModif);

  elem.querySelector(".event__card__divAuthorDate").replaceChild(authorModif, author);

  const buttonEdit = document.createElement("button");
  const buttonEditText = document.createTextNode("Valider les changements");
  buttonEdit.appendChild(buttonEditText);
  elem.appendChild(buttonEdit);

  buttonEdit.addEventListener("click", () => {
    if (titreModif.value !== "" &&
     titreModif.value.length < 256 && 
     descriModif.value !== "" &&
      descriModif.value.length < 256 && 
      authorModif.value !== "" &&
      authorModif.value.length < 256 ){

    editElement(id, titreModif.value, descriModif.value, authorModif.value);
    } else if (titreModif.value === "" ||
    descriModif.value === "" ||
    authorModif.value === ""
    ){
      alert("All fields must be filled.");
    } else if (titreModif.value.length > 256 ||
      descriModif.value.length > 256 ||
      authorModif.value.length > 256 
    ) { 
      alert("All fields must be shorter than 256 characters.");
    }
  });
}