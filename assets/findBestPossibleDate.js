export default async function findBestPossibleDate(id) {
  const bestPossible = await fetch(`http://localhost:3000/api/events/${id}`, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  });

  const res = await bestPossible.json();
  const allDates = [];

  for (let elem of res.dates) {
    let attendees = 0;

    for (let i = 0; i < elem.attendees.length; i++) {
      let isThere = elem.attendees[i].available;

      if (isThere === true) {
        attendees++;
      }
    }

    allDates.push(attendees);
  }

  let mostSuitableDate =
    res.dates[allDates.indexOf(Math.max(...allDates))].date;

  return mostSuitableDate;
}
