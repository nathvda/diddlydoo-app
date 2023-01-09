
export default function addDateOnClick(e){
    e.preventDefault();
    let form = document.getElementById('myform');
    let newDate = document.createElement('input');
    let divError = document.createElement('div'); 
    let minusButton = document.createElement('button');
    newDate.setAttribute('type', 'date');
    newDate.setAttribute('name', 'dates[]');
    newDate.setAttribute('class', 'dates');
    newDate.setAttribute('id', 'date2');
    minusButton.setAttribute('id', 'suppDate');
    minusButton.textContent = 'Suppress';
    let formDates = document.querySelector('.form__dates')
    formDates.appendChild(newDate);
    formDates.appendChild(divError);
    formDates.appendChild(minusButton);
    minusButton.addEventListener('click', (el) => {
        el.preventDefault();
        formDates.removeChild(newDate);
        formDates.removeChild(divError);
        formDates.removeChild(minusButton);
    })
}