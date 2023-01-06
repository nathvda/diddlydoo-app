export default async function editElement(id, namevalue, description, author) {
  try {
    await fetch(`http://localhost:3000/api/events/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: namevalue,
        description: description,
        author: author,
      }),
    })
      .then((response) => response.json())
      .then(console.log("modification complete"));
  } catch (e) {
    console.log(e);
  }
}
