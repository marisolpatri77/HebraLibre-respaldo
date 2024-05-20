window.addEventListener("load", function(){
    let formulario = document.querySelector("form");
    formulario.addEventListener("submit", function(e){
        e.preventDefault();
        
        let campoName = document.querySelector("input[name='name']");
        let campoEmail = document.querySelector("input[name='mail']");
        let campoMensaje = document.querySelector("textarea[name='mensaje']")
        if (campoName.value == ""){
            document.getElementById('error-name').innerHTML = "*Este campo no puede estar vacio"
        } else if(campoName.value.length < 5){
            document.getElementById('error-name').innerHTML = "*Este campo debe contener mas de 5 letras"
        }
        if (campoEmail.value == ""){
            document.getElementById('error-email').innerHTML = "*Este campo no puede estar vacio"
        } else if(campoEmail.value.length < 5){
            document.getElementById('error-email').innerHTML = "*Este campo debe contener mas de 3 letras"
        }
        if (campoMensaje.value == ""){
            document.getElementById('error-mensaje').innerHTML = "*Este campo no puede estar vacio"
        } else if(campoMensaje.value.length < 20){
            document.getElementById('error-mensaje').innerHTML = "*Este campo debe contener mas de 20 caracteres"
        }
    })
})