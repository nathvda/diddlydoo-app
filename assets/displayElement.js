import deleteElement from "./deleteElement.js";
import editModeToggle from "./editModeToggle.js";
import addAvailable from "./addAvailability.js";
import findBestPossibleDate from "./findBestPossibleDate.js";
import checkboxUnavailable from "./checkboxUnavailable.js";

export default function generateElement(event, id, descr, auteur, dates) {
  const wrapper = document.getElementById("event__wrapper");

  const element = document.createElement("section");
  element.classList.add("event__card");
  element.setAttribute("id", id);

  const divHeader = document.createElement("div");
  divHeader.classList.add("event__card__divHeader");
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

  const divAuthorDate = document.createElement('div');
  divAuthorDate.classList.add('event__card__divAuthorDate');
  element.appendChild(divAuthorDate);

  author.appendChild(authorText);
  divAuthorDate.appendChild(author);

  const bestDate = document.createElement("p");
  bestDate.classList.add("event__card__bestDate");
  let bestDateValue;
  findBestPossibleDate(id).then((value) => {
    bestDateValue = value;
    const bestDateText = document.createTextNode(`${bestDateValue}`);
    bestDate.appendChild(bestDateText);
  });

  divAuthorDate.appendChild(bestDate);

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

  const divAttendees = document.createElement('div');
  divAttendees.classList.add('event__card__divAttendees');
  divAttendees.classList.add('displayNone');
  element.appendChild(divAttendees);

  const arrayAttendees = document.createElement("div");
  arrayAttendees.classList.add("event__card__arrayAttendees");

  divAttendees.appendChild(arrayAttendees);

  for (let i = 0; i < dates.length; i++) {
    const date_box = document.createElement("div");
    date_box.classList.add('event__card__array');
    const date = document.createElement("h5");
    date.classList.add("event__card__date");
    const dateText = document.createTextNode(`${dates[i].date}`);

    date.appendChild(dateText);

    date_box.appendChild(date);
    arrayAttendees.appendChild(date_box);

    const attendeeList = document.createElement("ul");
    attendeeList.classList.add('event__card__listAttendees');
    date_box.appendChild(attendeeList);

    for (let j = 0; j < dates[i].attendees.length; j++) {
      const attendName = document.createElement("li");
      attendName.classList.add('event__card__attendee');
      const attendNameText = document.createTextNode(
        dates[i].attendees[j].name
      );

      const attend = document.createElement("input");
      attendName.appendChild(attendNameText);

      attend.setAttribute("type", "checkbox");

      attend.addEventListener("change", () => {

        checkboxUnavailable(id, dates[i].date, dates[i].attendees[j].name, attend.checked);

      })

      if (dates[i].attendees[j].available === true) {
        attend.classList.add("event__card__attendee--available");
        attend.checked = true;
      } else {
        attend.classList.add("event__card__attendee--unavailable");
        attend.checked = false;

      }
      attend.classList.add("event__card__disponibility");
      attendeeList.appendChild(attendName);

      attendName.appendChild(attend);
    }
  }

  const addAvailability = document.createElement("button");
  const addAvailabilityText = document.createTextNode("+");
  addAvailability.classList.add("event__card__button--addDates");

  addAvailability.addEventListener("click", () => {
    addAvailable(id, dates);
  });
  //addAvailability.appendChild(addAvailabilityText);
  divAttendees.appendChild(addAvailability);

  
    let tailleEcran = window.matchMedia('(min-width:1024px)');
    if (!tailleEcran.matches){

      titre.addEventListener('click', (e) => { 

        if (divAttendees.classList.contains('displayNone')){
        divAttendees.classList.replace('displayNone', 'displayBlock');
        divAttendees.style.display= 'block';
      }

      else {
        divAttendees.classList.replace('displayBlock', 'displayNone');
        divAttendees.style.display= 'none';
    }

  })

    } else {
      divAttendees.classList.replace('displayNone', 'displayBlock');
      divAttendees.style.display= 'block';
      divAttendees.style.display= 'block';
    }
  

  const divButton = document.createElement('div');
  divButton.classList.add('event__card__button');
  element.appendChild(divButton);

  const modificationButton = document.createElement("button");
  //const modificationButtonText = document.createTextNode("E");
  modificationButton.setAttribute("type", "button");
  modificationButton.classList.add("event__card__button--edit");

  modificationButton.addEventListener("click", () => {
    editModeToggle(id, divHeader);
  });
  //modificationButton.appendChild(modificationButtonText);
  divButton.appendChild(modificationButton);

  const deleteButton = document.createElement("button");
  //const deleteButtonText = document.createTextNode("X");
  deleteButton.setAttribute("type", "button");
  deleteButton.classList.add("event__card__button--delete");

  deleteButton.addEventListener("click", () => {
    deleteElement(id);
  });
  //deleteButton.appendChild(deleteButtonText);
  divButton.appendChild(deleteButton);

  wrapper.appendChild(element);
}
