// Declara el array usuario y carga su contenido desde sessionStorage al inicio
let usuario = JSON.parse(sessionStorage.getItem("userArray")) || [];

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
    loadArray();

    document.getElementById("form").reset();
}

function loadArray(){
    let tableUser = document.getElementById("userTable");
    let tableCont = "";
    let i = 1;
    let index = 0;
    document.getElementById("IDUser").value = i;

    usuario.forEach(function(user){
        tableCont += "<tr>"+
        "<td>"+i+"</td>"+
        "<td>"+user.rol+"</td>"+
        "<td>"+user.correo+"</td>"+
        "<td>"+user.contra+"</td>"+
        "<td>"+user.nombre+"</td>"+
        '<td><div class="d-flex justify-content-between"><div class=""><a href="#"><i class="fa-solid fa-pen fa-xl" onclick="editPopup()" style="color: #3cc3bd;"></i></a></div><div><a href="#"><i class="fa-solid fa-trash fa-xl" onclick="deleteField('+ index +')" style="color: #929292;"></i></a></div><div><label class="switch"><input type="checkbox" checked><span class="slider round"></span></label></div></div></td>'+
        "</tr>";
        i++;
        index++;
        document.getElementById("IDUser").value = i;
    });
    tableUser.innerHTML = tableCont;
}
