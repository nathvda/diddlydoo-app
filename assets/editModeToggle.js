import editElement from './editElement.js'

export default function editModeToggle (id) {
  const elem = document.getElementById(id)

  const titre = elem.querySelector('.card__name')
  console.log(titre.innerHTML)

  const titreModif = document.createElement('input')
  titreModif.value = titre.innerHTML
  console.log(titreModif)

  elem.replaceChild(titreModif, titre)

  const description = elem.querySelector('.event__card__description')
  console.log(description.innerHTML)

  const descriModif = document.createElement('input')
  descriModif.value = description.innerHTML
  console.log(descriModif)

  elem.replaceChild(descriModif, description)

  const author = elem.querySelector('.event__card__author')
  console.log(author.innerHTML)

  const authorModif = document.createElement('input')
  authorModif.value = author.innerHTML
  console.log(authorModif)

  elem.replaceChild(authorModif, author)

  const buttonEdit = document.createElement('button')
  const buttonEditText = document.createTextNode('Valider les changements')
  buttonEdit.appendChild(buttonEditText)
  elem.appendChild(buttonEdit)

  buttonEdit.addEventListener('click', () => {
    editElement(id, titreModif.value, descriModif.value, authorModif.value)
  })
}
