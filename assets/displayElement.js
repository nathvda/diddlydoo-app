export default function generateElement(
  event,
  id,
  descr,
  auteur,
  dates,
  participants
) {
  let wrapper = document.getElementById("event__wrapper");

  let element = document.createElement("div");
  element.classList.add("event__card");
  element.setAttribute("id", id);

  let cardName = document.createElement("h3");
  cardName.classList.add("card__name");
  let cardNameText = document.createTextNode(event);
  cardName.appendChild(cardNameText);
  element.appendChild(cardName);

  let descrPara = document.createElement("p");
  descrPara.classList.add("card__description");
  let descrParaText = document.createTextNode(descr);
  descrPara.appendChild(descrParaText);
  element.appendChild(descrPara);

  let author = document.createElement("p");
  author.classList.add("card__author");
  let authorText = document.createTextNode(`by: ${auteur}`);
  author.appendChild(authorText);
  element.appendChild(author);

  let titre = document.createElement("h4");
  let titreText = document.createTextNode("Attendees");
  titre.appendChild(titreText);
  element.appendChild(titre);

  console.log(element);

  for (let elem of dates) {
    console.log(elem);
    let date_box = document.createElement("div");
    let date = document.createElement("h5");
    date.classList.add("date");
    let dateText = document.createTextNode(elem);

    date.appendChild(dateText);

    date_box.appendChild(date);
    element.appendChild(date_box);

    for (let elem of participants) {
      console.log(elem);
      let attendName = document.createElement("li");
      let attendNameText = document.createTextNode(elem);
      let attend = document.createElement("input");
      attendName.appendChild(attendNameText);
      attend.setAttribute("type", "checkbox");
      element.appendChild(attendName);
      date.appendChild(attend);
    }
  }

  wrapper.appendChild(element);
}
