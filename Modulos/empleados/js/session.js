let empleado = JSON.parse(sessionStorage.getItem("emploArray")) || [];

function arrayEmployee(){
    let name = document.getElementById("name").value;
    let contrato = document.getElementById("contrato").value;
    let genero = document.getElementById("genero").value;
    let tel = document.getElementById("telef").value;
    let email = document.getElementById("email").value;
    let lastname = document.getElementById("lastname").value;
    let nacimiento = document.getElementById("nacimiento").value;
    let address = document.getElementById("address").value;
    let password = document.getElementById("password").value;
   
    let employee = {
        nombre: name,
        apellido: lastname,
        dir: address,
        correo: email,
        telefono: tel,
        naci: nacimiento,
        contra: contrato,
        gen: genero,
        contra: password
    }
    empleado.push(employee);
    sessionStorage.setItem("emploArray", JSON.stringify(empleado));
    loadArray();

    document.getElementById("form").reset();
}

function loadArray(){
    let tableEmplo = document.getElementById("emploTable");
    let tableCont = "";
    let i = 1;
    let index = 0;
    document.getElementById("IDEmployee").value = i;

    empleado.forEach(function(employee){
        tableCont += "<tr>"+
        "<td>"+i+"</td>"+
        "<td>"+employee.nombre+"</td>"+
        "<td>"+employee.apellido+"</td>"+
        "<td>"+employee.gen+"</td>"+
        "<td>"+employee.contra+"</td>"+
        "<td>"+employee.naci+"</td>"+
        "<td style='max-width: 200px; overflow-x: auto'>"+employee.correo+"</td>"+
        "<td>"+employee.dir+"</td>"+
        "<td>"+employee.telefono+"</td>"+
        "<td>"+employee.contra+"</td>"+
        '<td><div class="d-flex justify-content-between"><div class=""><a href="#"><i class="fa-solid fa-pen fa-xl" onclick="editPopup()" style="color: #3cc3bd;"></i></a></div><div><a href="#"><i class="fa-solid fa-trash fa-xl" onclick="deleteField('+ index +')" style="color: #929292;"></i></a></div><div><label class="switch"><input type="checkbox" checked><span class="slider round"></span></label></div></div></td>'+
        "</tr>"
        index++;
        i++;
        document.getElementById("IDEmployee").value = i;
    });
    tableEmplo.innerHTML = tableCont;
    
}