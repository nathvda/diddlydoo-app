import editAvailability from "./editAvailability.js";

export default function addAvailable(id, dates) {
  const availablebox = document.createElement("div");
  availablebox.classList.add("event__card__available--menu");

  const availableboxLabel = document.createElement("label");
  availableboxLabel.setAttribute("for", "name");
  availableboxLabel.classList.add('event__card__available--label');
  const availableboxLabelText = document.createTextNode("Name");

  const availableboxInput = document.createElement("input");
  availableboxInput.classList.add('event__card__available--input');
  availableboxInput.setAttribute("id", `${id}-name`);

  availableboxLabel.appendChild(availableboxLabelText);

  const selectDate = document.createElement("select");
  selectDate.classList.add('event__card__available--selectDate');
  for (const elem of dates) {
    const options = document.createElement("option");
    options.setAttribute("value", elem.date);
    const optionsText = document.createTextNode(elem.date);
    options.appendChild(optionsText);
    selectDate.appendChild(options);
  }

  const selectAvailability = document.createElement("select");
  selectAvailability.classList.add('event__card__available--selectAvailability');

  const valeurs = {
    Available: true,
    Unavailable: false,
  };

  for (const elem in valeurs) {
    const options = document.createElement("option");
    options.setAttribute("value", valeurs[elem]);
    const optionsText = document.createTextNode(elem);
    options.appendChild(optionsText);
    selectAvailability.appendChild(options);
  }

  const addAvailabilityButton = document.createElement("button");
  addAvailabilityButton.classList.add('event__card__available--button');
  const addAvailabilityButtonText = document.createTextNode("Add");

  addAvailabilityButton.addEventListener("click", () => {
    const dateChosen = selectDate.selectedIndex;
    const dateChosenOption = selectDate.querySelectorAll("option")[dateChosen];
    const dateChosenValue = dateChosenOption.value;
    console.log(dateChosenValue);

    const availableChosen = selectAvailability.selectedIndex;
    const availableChosenOption =
      selectAvailability.querySelectorAll("option")[availableChosen];
    const availableChosenValue = availableChosenOption.value;
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

  document.getElementById(id).appendChild(availablebox);
  availablebox.appendChild(availableboxLabel);
  availablebox.appendChild(availableboxInput);
  availablebox.appendChild(selectDate);
  availablebox.appendChild(selectAvailability);
  availablebox.appendChild(addAvailabilityButton);
}
