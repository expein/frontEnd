const validacion = ()=>{
    let cliente, servicio, agregar, hora, fecha;

    cliente = document.getElementById('cliente').value
    servicio = document.getElementById("servicio").value
    agregar = document.getElementById('agregar').value
    hora = document.getElementById('hora').value
    fecha = document.getElementById('fecha').value

    let verificar = validar(cliente, servicio, agregar, hora, fecha)

    if(verificar === true){
        let op = confirm('Esta seguro que desea registrar la cita')
        return op
    }else{
        return false
    }
}

const validar = (cliente, servicio, agregar, hora, fecha)=>{
    let = validate = true;

    if (
      cliente.trim() == "" ||
      servicio.trim() == "" ||
      agregar.trim() == "" ||
      hora.trim() == 0 ||
      fecha.trim() == ""
    ) {
        validate = false;
        alert('Campos sin llenar')
    }

    return validate
}

const editar = ()=>{
    window.open('editar.html', 'Editar cita', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=800,height=700,left = 390,top = 50')
}

const cerrar = ()=>{
   window.close()
}