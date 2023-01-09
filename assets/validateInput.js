//Cette fonction prend un string comme argument
//et vérifie si ce string contient min 1 caractère, et max 256 caractères.
export default function validateInput(e){
    e.preventDefault();
    let form = document.getElementById('myform');
    let err = document.getElementById('errorName');
    let names = ["name", "author", "description"];
    let submit = true;
    for (let n of names){
        if (form[n].value == "") {
            form[n].nextElementSibling.nextElementSibling.textContent = "This field must be filled";
            form[n].nextElementSibling.nextElementSibling.style.color = 'red';
            submit = false;
        }
        else if (form[n].value.length > 256){
            form[n].nextElementSibling.nextElementSibling.textContent = "This field must contain at leat 256 characters";
            form[n].nextElementSibling.nextElementSibling.style.color = 'red';
            submit = false;
        } 
    }
    let dates = document.getElementsByClassName('dates');
    for (let date of dates){
    if (date.value == "") {
            date.nextElementSibling.nextElementSibling.textContent = "This field must be filled";
            date.nextElementSibling.nextElementSibling.style.color = 'red';
            submit = false;
        }
    }
    if (submit==true) {
        form.submit();
        form.reset();
        for (let n of names) {
            form[n].nextElementSibling.nextElementSibling.textContent = ""; 
        }
    }
}