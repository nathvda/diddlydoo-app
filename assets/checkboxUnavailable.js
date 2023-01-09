

export default async function checkboxUnavailable (id, date, name, available) {
   try {

    let woop;

    await fetch(`http://localhost:3000/api/events/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json'}
    }).then((res => res.json()))
    .then((data => woop = data));

    console.log(woop.dates);

    for (let elem of woop.dates){
      if (elem.date === date){
        console.log("bonne date");
        for (let att of elem.attendees){
          if (att.name === name){
            att.available = available;
          }
        }
      } else {
        console.log(elem.date);
      }
    }


    console.log(woop);
    
    



      // await fetch(`http://localhost:3000/api/events/${id}/attend`, {
      //   method: 'PATCH',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     name: name,
      //     dates: [{date: date,
      //       available : available}]
      //   })
      // })
      //   .then((response) => response.json())
      //   .then(console.log('attendee modified'))
    } catch (e) {
      console.log(e)
    }
  }
  