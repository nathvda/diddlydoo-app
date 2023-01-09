

export default async function checkboxUnavailable (id, date, name, available) {
    try {
      await fetch(`http://localhost:3000/api/events/${id}/attend`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name,
          dates: [{date: date,
            available : available}]
        })
      })
        .then((response) => response.json())
        .then(console.log('attendee modified'))
    } catch (e) {
      console.log(e)
    }
  }
  