
const form = document.querySelector("#login");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formIsValid = true;

    const inputValidation = [
        {
            name: 'email',
            requered: true
        },
        {
            name: 'password',
            requered: true
        },
    ];

    inputValidation.forEach((indice) => {
       
        let errorP = document.getElementById(`${indice.name}Error`);
        errorP.innerText = ''
        if (indice.requered && form[indice.name].value == '') {
            errorP.innerText = 'campo requerido';
            formIsValid = false;
        }
        
    })
    if (formIsValid) {
        form.submit(); 
    }
});
function isValidEmail(email = '') {
    const regex = new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      return regex.test(email.toLowerCase())
}

form.email.addEventListener('blur', (e) =>{
    const elementoP = document.getElementById('emailError')
    
    if(!isValidEmail(e.target.value)){
        elementoP.innerText= 'E-mail invalido';

    }
})



