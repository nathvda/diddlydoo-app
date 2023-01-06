import generateElement from './displayElement.js'

export default async function readElement () {
  try {
    const response = await fetch('http://localhost:3000/api/events', {
      method: 'GET',
      headers: { 'Content-Type': 'application-json' }
    })
    const data = await response.json()

    // Création de l'objet
    for (const elem of data) {
      const newEvent = {
        author: elem.author,
        created_at: elem.created_at,
        dates: elem.dates,
        description: elem.description,
        id: elem.id,
        last_modification: elem.last_modification,
        name: elem.name,
        num_modification: elem.num_modification
      }

      generateElement(
        newEvent.name,
        newEvent.id,
        newEvent.description,
        newEvent.author,
        newEvent.dates
      )
    }
  } catch (e) {
    console.log(e)
  }
}
