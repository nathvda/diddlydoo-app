import editAvailability from "./editAvailability.js";

export default function addAvailable(id, dates) {
  const availablebox = document.createElement("div");
  availablebox.classList.add("event__card__available__menu");

  const availableboxLabel = document.createElement("label");
  availableboxLabel.setAttribute("for", "name");
  const availableboxLabelText = document.createTextNode("Name");

  const availableboxInput = document.createElement("input");
  availableboxInput.setAttribute("id", `${id}-name`);

  availableboxLabel.appendChild(availableboxLabelText);

  const selectDate = document.createElement("select");
  for (const elem of dates) {
    const options = document.createElement("option");
    options.setAttribute("value", elem.date);
    const optionsText = document.createTextNode(elem.date);
    options.appendChild(optionsText);
    selectDate.appendChild(options);
  }

  const selectAvailability = document.createElement("select");

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
  const addAvailabilityButtonText = document.createTextNode("Add");

  addAvailabilityButton.addEventListener("click", () => {
    const dateChosen = selectDate.selectedIndex;
    const dateChosenOption = selectDate.querySelectorAll("option")[dateChosen];
    const dateChosenValue = dateChosenOption.value;
    console.log(dateChosenValue);

    const availableChosen = selectAvailability.selectedIndex;
    const availableChosenOption =
      selectAvailability.querySelectorAll("option")[availableChosen];
    let availableChosenValue = availableChosenOption.value;

    if (availableChosenValue === "true") { 
      availableChosenValue = true; 
    } else {
      availableChosenValue = false;
    }

    console.log(availableChosenValue);

    console.log(availableboxInput.value);

    if (availableboxInput.value === "") {
      alert("Name must be filled");
    } else if (availableboxInput.value.length > 256){
      alert("The name must be shorter than 256 characters");
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
