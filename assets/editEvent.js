export default async function editEvent(id) {
  try {
    await fetch(`http://localhost:3000/api/events/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "hello",
        author: "dieu",
        description: "I don't know",
      }),
    })
      .then((response) => response.json())
      .then(console.log("modification complete"));
  } catch (e) {
    console.log(e);
  }
}
