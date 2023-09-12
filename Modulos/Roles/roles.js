const crearCompra = (arg)=>{
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
  let nombre, permisos, agregarPermisos;

  nombre = document.getElementById('nombre').value
  permisos = document.getElementById("permisos").value
  agregarPermisos = document.getElementById('agregarPermisos').value

  let verificar = validar(nombre, permisos, agregarPermisos)

  if(verificar === true){
      let op = confirm('Esta seguro que desea registrar un nuevo rol')
      return op
  }else{
      return false
  }
}

const validar = (nombre, permisos, agregarPermisos)=>{
  let = validate = true;

  if (
    nombre.trim() == "" ||
    permisos.trim() == "Permisos" ||
    agregarPermisos.trim() == "agregarPermisos"
  ) {
      validate = false;
      alert('Campos sin llenar')
  }else if(isNaN(permisos) || isNaN(agregarPermisos)){
      validate = false;
      alert('El campo Permisos o agregar Permisos deben ser numericos')
  }

  return validate
}

const editar = ()=>{
  var rutaActual = window.location.href;
  var nombreArchivo = rutaActual.split('/').pop();
  var rutaCarpeta = rutaActual.replace(nombreArchivo, '');
  window.open(rutaCarpeta + '/editar.html', 'Editar compra', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=600,height=500,left = 390,top = 50')
}

const cerrar = ()=>{
 window.close()
}