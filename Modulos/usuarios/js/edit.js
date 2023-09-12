let userArray = JSON.parse(sessionStorage.getItem("userArray")) || [];

function editField(index){
    userArray.splice(index, 1);
    sessionStorage.setItem("userArray", JSON.stringify(userArray));
    arrayUser();

    window.closed();
}

function arrayUser(){
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let rol = document.getElementById("rol").value;
   
    let user = {
        nombre: username,
        correo: email,
        contra: password,
        rol: rol
    }

    usuario.push(user);
    sessionStorage.setItem("userArray", JSON.stringify(usuario));
}
