//Cette fonction prend un string comme argument
//et vérifie si ce string contient min 1 caractère, et max 256 caractères.
export default function validateInput(e){
    let form = document.getElementById('myform');
    let err = document.getElementById('errorName');
    if (form.name.value == "") {
        err.textContent = "Le champ doit être complété";
        err.style.color = 'red';
        e.preventDefault();
    }
    else if (form.name.value.length > 256){
        err.textContent = "Le champ doit comporter moins de 256 caractères";
        e.preventDefault();
    } 
    else {
        form.reset();
    }
}
