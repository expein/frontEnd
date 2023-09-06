const crearProveedor = (arg)=>{
    let mostrar, ocultar, mostrarForm

    ocultar = document.getElementById("ocultar");
    mostrar = document.getElementById('mostrar');
    mostrarForm = document.getElementById("mostrarForm");

    if(arg == "mostrar"){
        mostrar.style.display = "";
        mostrarForm.style.display = "";
        ocultar.style.display = "none"
    }else if(arg == 'Cancelar'){
        mostrar.style.display = "none";
        mostrarForm.style.display = "none";
        ocultar.style.display = "";
    }
}

const validacion = ()=>{
    let tipoProveedor, nombre, address, phone, state;

    tipoProveedor = document.getElementById('tipoProveedor').value
    nombre = document.getElementById("nombre").value
    address = document.getElementById('address').value
    phone = document.getElementById('phone').value
    state = document.getElementById('state').value

    console.log(tipoProveedor, nombre, address, phone, state)

    let verificar = validar(tipoProveedor, nombre, address, phone, state)

    if(verificar === true){
        let op = confirm('¿Está seguro que desea registrar el proveedor?')
        return op
    }else{
        return false
    }
}

const validar = (tipoProveedor, nombre, address, phone, state)=>{
    let = validate = true;

    if (
      tipoProveedor.trim() == "0" ||
      nombre.trim() == "" ||
      address.trim() == "" ||
      phone.trim() == "" ||
      state.trim() == "0"
    ) {
        validate = false;
        alert('Campos sin llenar')
    }else if(nombre.length <= 3 || nombre.length >= 20){
        validate = false;
        alert("La cantidad de caracteres es invalido")
    }else if(isNaN(phone)){
        validate = false;
        alert('El telefono debe ser numerico')
    }

    return validate
}

const editar = ()=>{
    window.open('file:///c%3A/Users/SENA/Downloads/pageMatissa%20v2-20230824T192507Z-001/pageMatissa%20v3/Modulos/proveedores/edtarProveedor.html', 'Editar compra', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=700,height=600,left = 390,top = 50')
}

const cerrar = ()=>{
   window.close()
}