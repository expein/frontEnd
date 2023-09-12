function backPage() {
    window.location.assign("./index.html");
}
function valid() {
    let name = document.getElementById("name").value;
    let contrato = document.getElementById("contrato").value;
    let genero = document.getElementById("genero").value;
    let tel = document.getElementById("telef").value;
    let email = document.getElementById("email").value;
    let lastname = document.getElementById("lastname").value;
    let nacimiento = document.getElementById("nacimiento").value;
    let address = document.getElementById("address").value;
    let password = document.getElementById("password").value;
    let expression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (name == "" || contrato == "" || tel == "" || email == "" || lastname == "" || nacimiento == "" || address == "" || password == ""){
        alert('Campos vacios');
        return false;
    }else if (!expression.test(email)){
        alert("Correo inválido");
        return false;
    }else if (isNaN(tel)){
        alert ("El teléfono debe ser numérico");
        return false;
    }else if (genero == "noSelect"){
        alert("Seleccione genero");
        return false;
    }else{
        let bool = confirm("¿Desea registrar el nuevo empleado?");
        alert("Empleado registrado");
        return bool;
    }
}