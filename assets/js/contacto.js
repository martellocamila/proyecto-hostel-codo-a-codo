const formulario = document.querySelector('#formulario');
const inputNombre = document.querySelector('#nombre');
const inputApellido = document.querySelector('#apellido');
const inputCorreo = document.querySelector('#correo');
const inputConfirmacionCorreo = document.querySelector('#confirmacion-correo');
const inputMensaje = document.querySelector('#mensaje');
const select = document.querySelector('#asunto');
const btnSubmit = document.querySelector('#submit');
const checkBoxes = document.querySelectorAll('input[name="huesped"]');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault(); 

    let formularioValido = true;

    if (!validarCampo(inputNombre)) formularioValido = false;
    if (!validarCampo(inputApellido)) formularioValido = false;
    if (!validarCampo(inputCorreo)) formularioValido = false;
    if (!validarCampo(inputConfirmacionCorreo)) formularioValido = false;
    if (!validarCampo(inputMensaje)) formularioValido = false;
    if (!validarCampo(select)) formularioValido = false;
    if (!validarCheckboxes()) formularioValido = false;
    
    // Si todo es válido, podemos enviar el formulario
    if (formularioValido) {
        mostrarAlerta('Enviado correctamente!', formulario.parentElement);
        formulario.reset();
        setTimeout(() => {
            limpiarAlerta(formulario.parentElement);
        }, 3000);
    }
}

function validarCampo(campo) {
    if (campo.value.trim() === '') {
        mostrarAlerta(`El campo ${campo.id} es obligatorio`, campo.parentElement);
        return false;
    }

    if (campo.id === 'correo' && !validarEmail(campo.value)) {
        mostrarAlerta('El correo no es válido', campo.parentElement);
        return false;
    }

    if (campo.id === 'confirmacion-correo' && !verificarIgualdadConfirmacionCorreo(campo.value)) {
        mostrarAlerta('Los correos deben ser iguales', campo.parentElement);
        return false;
    }

    if (campo.id === 'asunto' && campo.value == '0') {
        mostrarAlerta('Opción no válida', campo.parentElement);
        return false;
    }

    limpiarAlerta(campo.parentElement);
    return true;
}

function validarEmail(email) {
    // Expresión regular 
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email); // Comprobamos el email con el método especial para regex test
    return resultado;
}

function verificarIgualdadConfirmacionCorreo(correo) {
    const correoOriginal = inputCorreo.value;
    return correoOriginal === correo;
}

function validarCheckboxes() {
    if (!(Array.from(checkBoxes).some(checkbox => checkbox.checked))) {
        mostrarAlerta('Debes marcar una opción', checkBoxes[0].closest('fieldset'));
        return false;
    }
    limpiarAlerta(checkBoxes[0].closest('fieldset'));
    return true;
}

function mostrarAlerta(mensaje, referencia) {
    limpiarAlerta(referencia);
    
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('alerta');

    referencia.appendChild(error);
}

function limpiarAlerta(referencia) {
    const alerta = referencia.querySelector('.alerta');
    if (alerta) {
        alerta.remove();
    }
}




