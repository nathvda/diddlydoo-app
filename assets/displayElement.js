import deleteElement from "./deleteElement.js";
import editModeToggle from "./editModeToggle.js";
import addAvailable from "./addAvailability.js";

export default function generateElement(event, id, descr, auteur, dates) {
  const wrapper = document.getElementById("event__wrapper");

  const element = document.createElement("div");
  element.classList.add("event__card");
  element.setAttribute("id", id);

  const divHeader = document.createElement('div');
  divHeader.classList.add('event__card__divHeader');
  element.appendChild(divHeader);

  const imageCard = document.createElement("div");
  imageCard.classList.add("event__card__image");
  divHeader.appendChild(imageCard);

  const cardName = document.createElement("h3");
  cardName.classList.add("event__card__name");
  const cardNameText = document.createTextNode(event);
  cardName.appendChild(cardNameText);
  divHeader.appendChild(cardName);

  const author = document.createElement("p");
  author.classList.add("event__card__author");
  const authorText = document.createTextNode(`${auteur}`);

  author.appendChild(authorText);
  element.appendChild(author);

  const descrPara = document.createElement("p");
  descrPara.classList.add("event__card__description");
  const descrParaText = document.createTextNode(descr);
  descrPara.appendChild(descrParaText);
  element.appendChild(descrPara);

  const titre = document.createElement("h4");
  const titreText = document.createTextNode("Attendees");
  titre.classList.add("event__card__title4");

  titre.appendChild(titreText);
  element.appendChild(titre);

  for (let i = 0; i < dates.length; i++) {
    const date_box = document.createElement("div");
    const date = document.createElement("h5");
    date.classList.add("event__card__date");
    const dateText = document.createTextNode(`${dates[i].date}`);

    date.appendChild(dateText);

    date_box.appendChild(date);
    element.appendChild(date_box);

    for (let j = 0; j < dates[i].attendees.length; j++) {
      const attendName = document.createElement("li");
      const attendNameText = document.createTextNode(
        dates[i].attendees[j].name
      );

      const attend = document.createElement("input");
      attendName.appendChild(attendNameText);

      attend.setAttribute("type", "checkbox");

      if (dates[i].attendees[j].available === true) {
        attend.checked = true;
      } else {
        attend.checked = false;
      }
      attend.classList.add("event__card__attendee");

      element.appendChild(attendName);
      attendName.appendChild(attend);
    }
  }

  const modificationButton = document.createElement("button");
  const modificationButtonText = document.createTextNode("E");
  modificationButton.setAttribute("type", "button");
  modificationButton.classList.add("event__card__button--edit");

  modificationButton.addEventListener("click", () => {
    editModeToggle(id);
  });
  modificationButton.appendChild(modificationButtonText);
  element.appendChild(modificationButton);

  const deleteButton = document.createElement("button");
  const deleteButtonText = document.createTextNode("X");
  deleteButton.setAttribute("type", "button");
  deleteButton.classList.add("event__card__button--delete");

  deleteButton.addEventListener("click", () => {
    deleteElement(id);
  });
  deleteButton.appendChild(deleteButtonText);
  element.appendChild(deleteButton);

  const addAvailability = document.createElement("button");
  const addAvailabilityText = document.createTextNode("+");
  addAvailability.classList.add("event__card__button--addDates");

  addAvailability.addEventListener("click", () => {
    addAvailable(id, dates);
  });
  addAvailability.appendChild(addAvailabilityText);
  element.appendChild(addAvailability);

  wrapper.appendChild(element);
}
