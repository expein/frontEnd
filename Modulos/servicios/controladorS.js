const validacion = ()=>{
    let nombre, precio, duracion, descripcion;

    nombre = document.getElementById('nombre').value
    precio = document.getElementById("precio").value
    duracion = document.getElementById('duracion').value
    descripcion = document.getElementById('descripcion').value

    let verificar = validar(nombre, precio, duracion, descripcion)

    if(verificar === true){
        let op = confirm('Esta seguro que desea registrar el servicio')
        return op
    }else{
        return false
    }
}

const validar = (nombre, precio, duracion, descripcion)=>{
    let = validate = true;

    if (
      nombre.trim() == "" ||
      precio.trim() == "" ||
      duracion.trim() == "" ||
      descripcion.trim() == ""
    ) {
        validate = false;
        alert('Campos sin llenar')
    }

    return validate
}

const editar = ()=>{
    window.open('editarS.html', 'Editar Servicio', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=600,height=500,left = 390,top = 50')
}

const cerrar = ()=>{
   window.close()
}