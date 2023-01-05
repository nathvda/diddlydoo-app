export default async function addElement () {
    try {
        const response = await fetch ('http://localhost:3000/api/events', {
            method: 'GET',
            headers: { "Content-Type" : "application-json"}
        })
        const data = await response.json();
        console.log(data);

        //Création de l'objet
        for (let elem of data) {
            let newEvent = {
                author: elem.author,
                created_at: elem.created_at,
                dates: elem.dates,
                description: elem.description,
                id: elem.id,
                last_modification: elem.last_modification,
                name: elem.name,
                num_modification: elem.num_modification,
            }
        console.log(newEvent);
        }

    }
    catch (e){
        console.log(e);
    }
}