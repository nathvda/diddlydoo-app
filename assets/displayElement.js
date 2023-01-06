import deleteElement from "./deleteElement.js";
import editElement from "./editElement.js";

export default function generateElement(event, id, descr, auteur, dates) {
  let wrapper = document.getElementById("event__wrapper");

  let element = document.createElement("div");
  element.classList.add("event__card");
  element.setAttribute("id", id);

  let cardName = document.createElement("h3");
  cardName.classList.add("card__name");
  let cardNameText = document.createTextNode(event);
  cardName.appendChild(cardNameText);
  element.appendChild(cardName);

  let modificationButton = document.createElement("button");
  let modificationButtonText = document.createTextNode("E");
  modificationButton.setAttribute("type", "button");
  modificationButton.classList.add("event__card__button--edit");

  modificationButton.addEventListener("click", () => {
    editElement(id);
  });
  modificationButton.appendChild(modificationButtonText);
  element.appendChild(modificationButton);

  let deleteButton = document.createElement("button");
  let deleteButtonText = document.createTextNode("X");
  deleteButton.setAttribute("type", "button");
  deleteButton.classList.add("event__card__button--delete");

  deleteButton.addEventListener("click", () => {
    deleteElement(id);
  });
  deleteButton.appendChild(deleteButtonText);
  element.appendChild(deleteButton);

  let descrPara = document.createElement("p");
  descrPara.classList.add("event__card__description");
  let descrParaText = document.createTextNode(descr);
  descrPara.appendChild(descrParaText);
  element.appendChild(descrPara);

  let author = document.createElement("p");
  author.classList.add("event__card__author");
  let authorText = document.createTextNode(`by: ${auteur}`);
  author.appendChild(authorText);
  element.appendChild(author);

  let titre = document.createElement("h4");
  let titreText = document.createTextNode("Attendees");
  titre.classList.add("event__card__title4");

  titre.appendChild(titreText);
  element.appendChild(titre);

  for (let i = 0; i < dates.length; i++) {
    console.log(dates[i]);
    let date_box = document.createElement("div");
    let date = document.createElement("h5");
    date.classList.add("event__card__date");
    let dateText = document.createTextNode(`${dates[i].date}`);

    date.appendChild(dateText);

    date_box.appendChild(date);
    element.appendChild(date_box);

    for (let j = 0; j < dates[i].attendees.length; j++) {
      let attendName = document.createElement("li");
      let attendNameText = document.createTextNode(dates[i].attendees[j].name);

      let attend = document.createElement("input");
      attendName.appendChild(attendNameText);

      attend.setAttribute("type", "checkbox");
      attend.classList.add("event__card__attendee");

      element.appendChild(attendName);
      attendName.appendChild(attend);
    }
  }

  wrapper.appendChild(element);
}
