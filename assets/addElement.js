import generateElement from "./displayElement.js";

export default async function addElement() {
  try {
    const response = await fetch("http://localhost:3000/api/events", {
      method: "GET",
      headers: { "Content-Type": "application-json" },
    });
    const data = await response.json();

    //Création de l'objet
    for (let elem of data) {
      let newEvent = {
        author: elem.author,
        created_at: elem.created_at,
        dates: elem.dates,
        description: elem.description,
        id: elem.id,
        last_modification: elem.last_modification,
        name: elem.name,
        num_modification: elem.num_modification,
      };

      console.log(newEvent);

      console.log(newEvent.author);
      console.log(newEvent.created_at);
      console.log(newEvent.dates);
      console.log(newEvent.description);
      console.log(newEvent.id);

      generateElement(
        newEvent.name,
        newEvent.id,
        newEvent.description,
        newEvent.author,
        newEvent.dates
      );
    }
  } catch (e) {
    console.log(e);
  }
}
