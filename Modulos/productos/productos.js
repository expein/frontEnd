const registrarExistencia = (arg)=>{
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
    let nombre, price, description;

    nombre = document.getElementById('nombre').value
    price = document.getElementById("price").value
    description = document.getElementById('description').value

    let verificar = validar(nombre, price, description);

    if(verificar === true){
        let op = confirm('Esta seguro que desea registrar el proveedor')
        return op
    }else{
        return false
    }
}

const validar = (nombre, price, description) => {
  let = validate = true;

  if (
    nombre.trim() == "" || 
    price.trim() == "" ||
    description.trim() == ""
  ) {
    validate = false;
    alert("Campos sin llenar");
  } else if (isNaN(price)) {
    validate = false;
    alert("El campo precio debe de venta ser numericos");
  }

  return validate;
};

const editar = ()=>{
    var rutaActual = window.location.href;
    var nombreArchivo = rutaActual.split('/').pop();
    var rutaCarpeta = rutaActual.replace(nombreArchivo, '');
    window.open(rutaCarpeta + '/editarProducto.html', 'Editar compra', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=700,height=500,left = 390,top = 50')
}

const cerrar = ()=>{
   window.close()
}