export default async function editElement(id) {
  try {
    await fetch(`http://localhost:3000/api/events/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "I DON'T KNOW",
      }),
    })
      .then((response) => response.json())
      .then(console.log("modification complete"));
  } catch (e) {
    console.log(e);
  }
}
