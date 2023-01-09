export default async function checkboxUnavailable(id, date, name, available) {
  try {
    let fullObj;

    await fetch(`http://localhost:3000/api/events/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => (fullObj = data));

    console.log(fullObj.dates);
    console.log(fullObj.attendees);

    

    let infos = [];

    for (let elem of fullObj.dates) {
      for (let att of elem.attendees) {
        if (att.name === name) {
          if (elem.date === date) {
            att.available = available;
            let obj = { date: elem.date, available: att.available };
            infos.push(obj);
          } else {

          let obj = { date: elem.date, available: att.available };
          console.log(obj);
          infos.push(obj);
          }
          
          console.log(infos);
        }
      }
    }

    await fetch(`http://localhost:3000/api/events/${id}/attend`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: name,
            dates: infos
          })
        })
          .then((response) => response.json())
          .then(console.log('attendee modified'))
  } catch (e) {
    console.log(e);
  }
}
