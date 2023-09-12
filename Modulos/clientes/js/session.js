let cliente = JSON.parse(sessionStorage.getItem("clientArray")) || [];

function arrayClient(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let lastname =  document.getElementById("lastname").value;
    let tel = document.getElementById("telef").value;
    let nacimiento = document.getElementById("nacimiento").value;
    let password = document.getElementById("password").value;
   
    let client = {
        nombre: name,
        apellido: lastname,
        dir: address,
        correo: email,
        telefono: tel,
        naci: nacimiento,
        contra: password
    }

    cliente.push(client);
    sessionStorage.setItem("clientArray", JSON.stringify(cliente));
    loadArray();

    document.getElementById("form").reset();
}

function loadArray(){
    let tableClient = document.getElementById("clientTable");
    let tableCont = "";
    let i = 1;
    let index = 0;
    document.getElementById("IDClient").value = i;
    cliente.forEach(function(client){
        tableCont += "<tr>"+
        "<td>"+i+"</td>"+
        "<td>"+client.nombre+"</td>"+
        "<td>"+client.apellido+"</td>"+
        "<td>"+client.dir+"</td>"+
        "<td>"+client.correo+"</td>"+
        "<td>"+client.telefono+"</td>"+
        "<td>"+client.naci+"</td>"+
        "<td>"+client.contra+"</td>"+
        '<td><div class="d-flex justify-content-between"><div class=""><a href="#"><i class="fa-solid fa-pen fa-xl" onclick="editPopup()" style="color: #3cc3bd;"></i></a></div><div><a href="#"><i class="fa-solid fa-trash fa-xl" onclick="deleteField('+ index +')" style="color: #929292;"></i></a></div><div><label class="switch"><input type="checkbox" checked><span class="slider round"></span></label></div></div></td>'+
        "</tr>"
        index++;
        i++;
        document.getElementById("IDClient").value = i;
    });
    tableClient.innerHTML = tableCont;
}

