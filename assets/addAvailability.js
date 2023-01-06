export default function addAvailable(id) {
  console.log("woop");

  let availablebox = document.createElement("div");
  availablebox.classList.add("event__card__available__menu");

  let availableboxLabel = document.createElement("label");
  availableboxLabel.setAttribute("for", "name");
  let availableboxLabelText = document.createTextNode("Name");

  availableboxLabel.appendChild(availableboxLabelText);
  document.getElementById(id).appendChild(availableboxLabel);

  console.log(availablebox);
}
