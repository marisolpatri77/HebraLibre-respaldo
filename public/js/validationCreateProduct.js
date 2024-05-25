window.addEventListener("load", function(){
    let formulario = document.querySelector(".formulario");
    formulario.addEventListener("submit", function(e){
        e.preventDefault();
        const inputValidation = [
            {
                name: 'title',
                required: true
            },
            {   name: 'descripcion',
                required: true

            },
            {
                name: 'price',
                required: true
            }

        ];
        inputValidation.forEach((validation) => {
            const error = document.getElementById('${validation.name}Error');
            if(error){
                error.innerText = ''
            
            if(validation.required){
                const inputField = formulario.querySelector(`[name='${validation.name}']`);
                if(inputField && inputField.value.trim() === ''){
                error.innerText = "Campo Requerido";
            }
        }
        }else {
            console.warn(`No se encontró el elemento de error para el campo: ${validation.name}`);
        }

    });

});
});