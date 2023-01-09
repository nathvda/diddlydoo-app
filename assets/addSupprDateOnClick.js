
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
    minusButton.textContent = 'Supress';
    form.insertBefore(newDate, e.target);
    form.insertBefore(divError, e.target);
    form.insertBefore(minusButton, e.target);
    minusButton.addEventListener('click', (el) => {
        el.preventDefault();
        form.removeChild(newDate);
        form.removeChild(divError);
        form.removeChild(minusButton);
    })
}