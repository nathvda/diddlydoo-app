export default async function editEvent() {
  try {
    await fetch("http://localhost:3000/api/events/[id]/add_dates", {
      method: "PATCH",
      headers: { "Content-Type": "application-json" },
      body: {
        name: "Henri",
        dates: ["2022-08-16"],
        available: true,
      },
    }).then(console.log("modification complete"));
  } catch (e) {
    console.log(e);
  }
}
