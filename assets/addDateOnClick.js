export default function addDateOnClick(e){
    e.preventDefault();
    let form = document.getElementById('myform');
    let newDate = document.createElement('input');
    newDate.setAttribute('type', 'date');
    newDate.setAttribute('name', 'dates[]');
    newDate.setAttribute('class', 'dates');
    newDate.setAttribute('id', 'date2');
    
    form.insertBefore(newDate, e.target);
}