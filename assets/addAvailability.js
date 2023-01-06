import editAvailability from "./editAvailability.js";

export default function addAvailable(id, dates) {
  let availablebox = document.createElement("div");
  availablebox.classList.add("event__card__available__menu");

  let availableboxLabel = document.createElement("label");
  availableboxLabel.setAttribute("for", "name");
  let availableboxLabelText = document.createTextNode("Name");

  let availableboxInput = document.createElement("input");
  availableboxInput.setAttribute("id", `${id}-name`);

  availableboxLabel.appendChild(availableboxLabelText);

  let selectDate = document.createElement("select");
  for (let elem of dates) {
    let options = document.createElement("option");
    options.setAttribute("value", elem.date);
    let optionsText = document.createTextNode(elem.date);
    options.appendChild(optionsText);
    selectDate.appendChild(options);
  }

  let selectAvailability = document.createElement("select");

  let valeurs = {
    Available: true,
    Unavailable: false,
  };

  for (let elem in valeurs) {
    let options = document.createElement("option");
    options.setAttribute("value", valeurs[elem]);
    let optionsText = document.createTextNode(elem);
    options.appendChild(optionsText);
    selectAvailability.appendChild(options);
  }

  let addAvailabilityButton = document.createElement("button");
  let addAvailabilityButtonText = document.createTextNode("Add");
  s;
  addAvailabilityButton.addEventListener("click", () => {
    let dateChosen = selectDate.selectedIndex;
    let dateChosenOption = selectDate.querySelectorAll("option")[dateChosen];
    let dateChosenValue = dateChosenOption.value;
    console.log(dateChosenValue);

    let availableChosen = selectAvailability.selectedIndex;
    let availableChosenOption =
      selectAvailability.querySelectorAll("option")[availableChosen];
    let availableChosenValue = availableChosenOption.value;
    console.log(availableChosenValue);

    console.log(availableboxInput.value);

    if (availableboxInput.value === "") {
      alert("Name must be filled");
    } else {
      editAvailability(
        id,
        dateChosenValue,
        availableboxInput.value,
        availableChosenValue
      );
    }
  });

  addAvailabilityButton.appendChild(addAvailabilityButtonText);

  document.getElementById(id).appendChild(availableboxLabel);
  document.getElementById(id).appendChild(availableboxInput);
  document.getElementById(id).appendChild(selectDate);
  document.getElementById(id).appendChild(selectAvailability);
  document.getElementById(id).appendChild(addAvailabilityButton);
}
