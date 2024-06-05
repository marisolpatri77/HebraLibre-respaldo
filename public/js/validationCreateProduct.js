window.addEventListener('load', function () {
    let form = document.querySelector('.formulario');
    form.title.focus();
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const required = {
            title: true,
            colors: true,
            category: true,
            price: true,
            descripcion: true,
            img: true
        };

        let isValid = true;

        // Validación de campos requeridos
        for (const key in required) {
            const err = document.getElementById(`${key}Error`);
            if (required[key] && !form[key]?.value) {
                form[key].classList.add('is-invalid');
                err.classList.add('text-danger');
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
            if (form.title.value.length < 2) {
                const err = document.getElementById('titleError');
                err.classList.add('text-danger');
                err.innerText = 'El nombre del producto debe tener al menos 2 caracteres';
                form.title.classList.add('is-invalid');
                err.classList.remove('hidden');
                isValid = false;
            }

            if (form.colors.value.length < 2) {
                const err = document.getElementById('colorsError');
                err.classList.add('text-danger');
                err.innerText = 'El color del producto debe tener al menos 2 caracteres';
                form.colors.classList.add('is-invalid');
                err.classList.remove('hidden');
                isValid = false;
            }

            if (isNaN(form.price.value) || form.price.value <= 0) {
                const err = document.getElementById('priceError');
                err.classList.add('text-danger');
                err.innerText = 'Debe ingresar un precio válido';
                form.price.classList.add('is-invalid');
                err.classList.remove('hidden');
                isValid = false;
            }

            if (form.descripcion.value.length < 10) {
                const err = document.getElementById('descripcionError');
                err.classList.add('text-danger');
                err.innerText = 'La descripción debe tener al menos 10 caracteres';
                form.descripcion.classList.add('is-invalid');
                err.classList.remove('hidden');
                isValid = false;
            }

            let extensionesValidas = ['.jpg', '.png', '.gif', '.jpeg'];
            let file = form.img.files[0];
            if (file) {
                let fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();

                if (!extensionesValidas.includes(fileExtension)) {
                    const err = document.getElementById('imgError');
                    err.classList.add('text-danger');
                    err.innerText = `Las extensiones de archivos permitidas son ${extensionesValidas.join(', ')}`;
                    form.img.classList.add('is-invalid');
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