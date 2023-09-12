function backPage() {
    window.location.assign("./index.html");
}
function valid() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let rol = document.getElementById("rol").value;
    let expression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (username == "" || email == "" || password == ""){
        alert('Campos vacios');
        return false;
    }else if (!expression.test(email)){
        alert("Correo inválido");
        return false;
    }else if (rol == "noSelect"){
        alert("Seleccione rol");
        return false;
    }else{
        let bool = confirm("¿Desea registrar el nuevo usuario?");
        alert("Usuario registrado");
        return bool;
    }
}