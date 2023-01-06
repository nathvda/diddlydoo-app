import editElement from "./editElement.js";

export default function editModeToggle(id) {
  let elem = document.getElementById(id);

  let titre = elem.querySelector(".card__name");
  console.log(titre.innerHTML);

  let titreModif = document.createElement("input");
  titreModif.value = titre.innerHTML;
  console.log(titreModif);

  elem.replaceChild(titreModif, titre);

  let description = elem.querySelector(".event__card__description");
  console.log(description.innerHTML);

  let descriModif = document.createElement("input");
  descriModif.value = description.innerHTML;
  console.log(descriModif);

  elem.replaceChild(descriModif, description);

  let author = elem.querySelector(".event__card__author");
  console.log(author.innerHTML);

  let authorModif = document.createElement("input");
  authorModif.value = author.innerHTML;
  console.log(authorModif);

  elem.replaceChild(authorModif, author);

  let buttonEdit = document.createElement("button");
  let buttonEditText = document.createTextNode("Valider les changements");
  buttonEdit.appendChild(buttonEditText);
  elem.appendChild(buttonEdit);

  buttonEdit.addEventListener("click", () => {
    editElement(id, titreModif.value, descriModif.value, authorModif.value);
  });
}
