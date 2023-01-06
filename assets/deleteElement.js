// This function deletes an item in the DB according to the id that is passed in.

export default async function deleteElement(id) {
  try {
    await fetch(`http://localhost:3000/api/events/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then(console.log("suppression effectuée"));
  } catch (e) {
    console.log(e);
  }
}
