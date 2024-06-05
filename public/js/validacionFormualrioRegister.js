window.addEventListener('load', function () {

    let form = document.querySelector('.form-register');
    form.name.focus();
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const required = {
            name: true,
            lastName: true,
            email: true,
            password: true,
            avatar: true
        };

        let isValid = true;

        // Validación de campos requeridos
        for (const key in required) {
            const err = document.getElementById(`err-${key}`);
            if (required[key] && !form[key]?.value) {
                form[key].classList.add('is-invalid');
                err.classList.add('text-danger');
                console.log(`Aplicando clase text-danger a err-${key}`);
                err.innerText = 'El campo es requerido';
                err.classList.remove('hidden');
                isValid = false;
            } else {
                form[key].classList.remove('is-invalid');
                form[key].classList.add('is-valid');
                err.classList.add('hidden');
                err.classList.remove('text-danger');
                err.innerText = '';
            }
        }


        // Solo realizar las validaciones específicas si todos los campos requeridos tienen valores
        if (isValid) {
            if (form.name.value.length < 2) {
                const err = document.getElementById('err-name');
                err.classList.add('text-danger');
                err.innerText = 'El nombre debe tener al menos 2 caracteres';
                form.name.classList.add('is-invalid');
                err.classList.remove('hidden');
                isValid = false;
            }

            if (form.lastName.value.length < 2) {
                const err = document.getElementById('err-lastName');
                err.classList.add('text-danger');
                err.innerText = 'El apellido debe tener al menos 2 caracteres';
                form.lastName.classList.add('is-invalid');
                err.classList.remove('hidden');
                isValid = false;
            }

            function esEmailValido(email) {
                return email.includes('@') && email.includes('.');
            }

            if (!esEmailValido(form.email.value)) {
                const err = document.getElementById('err-email');
                err.classList.add('text-danger');
                err.innerText = 'Debe ingresar un email válido';
                form.email.classList.add('is-invalid');
                err.classList.remove('hidden');
                isValid = false;
            }

            if (form.password.value.length < 8) {
                const err = document.getElementById('err-password');
                err.classList.add('text-danger');
                err.innerText = 'La contraseña debe tener al menos 8 caracteres';
                form.password.classList.add('is-invalid');
                err.classList.remove('hidden');
                isValid = false;
            }
            /*falta ver lo de las may min num caract especial*/

            let extensionesValidas = ['.jpg', '.png', '.gif', '.jpeg'];
            let file = form.avatar.files[0];
            if (file) {
                let fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();

                if (!extensionesValidas.includes(fileExtension)) {
                    const err = document.getElementById('err-avatar');
                    err.classList.add('text-danger');
                    err.innerText = `Las extensiones de archivos permitidas son ${extensionesValidas.join(', ')}`;
                    form.avatar.classList.add('is-invalid');
                    err.classList.remove('hidden');
                    isValid = false;
                }
            }

        }

        if (isValid) {
            form.submit();
        }
    });


});