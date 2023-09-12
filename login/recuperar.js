function validacionFormulario1() {
    var email = document.getElementById("email1").value;
    var codigo = document.getElementById("codigo1").value;

    if (email === "") {
        alert("Por favor, ingrese su correo de verificación.");
        return false;
    }

    if (codigo === "") {
        alert("Por favor, ingrese el código de verificación.");
        return false;
    }


    return true;
}

function validacionFormulario2() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    if (password1 === "") {
        alert("Por favor, ingrese su nueva contraseña.");
        return false;
    }

    if (password2 === "") {
        alert("Por favor, confirme su contraseña.");
        return false;
    }

    if (password1 !== password2) {
        alert("Las contraseñas no coinciden.");
        return false;
    }

    return true;
}