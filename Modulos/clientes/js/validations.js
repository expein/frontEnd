function backPage() {
    window.location.assign("./index.html");
}
function valid() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let lastname = document.getElementById("lastname").value;
    let tel = document.getElementById("telef").value;
    let nacimiento = document.getElementById("nacimiento").value;
    let password = document.getElementById("password").value;
    let expression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (name == "" || email == "" || address == "" || lastname == "" || tel == "" || nacimiento == "" || password == ""){
        alert('Campos vacios');
        return false;
    }else if (!expression.test(email)){
        alert("Correo inválido");
        return false;
    }else if (isNaN(tel)){
        alert ("El teléfono debe ser numérico");
        return false;
    }else{
        let bool = confirm("¿Desea registrar el nuevo cliente?");
        alert("Cliente registrado");
        return bool;
    }
}

