export default async function editAvailability (id, date, name, available) {
  try {
    await fetch(`http://localhost:3000/api/events/${id}/add_dates`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        dates: [{ date }]
      })
    })
      .then((response) => response.json())
      .then(console.log('attendee added'))
  } catch (e) {
    console.log(e)
  }
}
