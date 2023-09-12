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
        let cantidad, factura, price, product, proveedor, description, fecha;

        cantidad = document.getElementById('cantidad').value
        factura = document.getElementById("factura").value
        price = document.getElementById('price').value
        proveedor = document.getElementById('proveedor').value
        product = document.getElementById('product').value
        description = document.getElementById('description').value
        fecha = document.getElementById('fecha').value

        cantidad = ''
        factura = ''
        price = ''
        proveedor = 0
        product = 0
        description = ''
        fecha = ''

        mostrar.style.display = "none";
        mostrarForm.style.display = "none";
        ocultar.style.display = "";

    }
}

const validacion = ()=>{
    let cantidad, factura, price, product, proveedor, description, fecha;

    cantidad = document.getElementById('cantidad').value
    factura = document.getElementById("factura").value
    price = document.getElementById('price').value
    proveedor = document.getElementById('proveedor').value
    product = document.getElementById('product').value
    description = document.getElementById('description').value
    fecha = document.getElementById('fecha').value

    let verificar = validar(cantidad, factura, price, product, proveedor, description, fecha)

    if(verificar === true){
        let op = confirm('Esta seguro que desea registrar el proveedor')
        return op
    }else{
        return false
    }
}

const validar = (cantidad, factura, price, product, proveedor, description, fecha)=>{
    let = validate = true;

    if (
      cantidad.trim() == "" ||
      factura.trim() == "" ||
      price.trim() == "" ||
      product.trim() == 0 ||
      proveedor.trim() ==  0 ||
      description.trim() == "" ||
      fecha.trim() == ""
    ) {
        validate = false;
        alert('Campos sin llenar')
    }else if(isNaN(cantidad) || isNaN(price)){
        validate = false;
        alert('El campo cantidad y precio deben ser numericos')
    }

    return validate
}

const editar = ()=>{
    var rutaActual = window.location.href;
    var nombreArchivo = rutaActual.split('/').pop();
    var rutaCarpeta = rutaActual.replace(nombreArchivo, '');
    window.open(rutaCarpeta + '/editarCompra.html', 'Editar compra', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=700,height=600,left = 390,top = 50')
}

const cerrar = ()=>{
   window.close()
}

let codigoDetalleSum = 1

const AgregarDetalleCompra = ()=>{
    let formDetalleCompra = document.getElementById('formDetalleCompra')
    let detallesCompra = document.getElementById('detallesCompra')

    codigoDetalleSum += 1

    let formClonado = formDetalleCompra.cloneNode(true)

    detallesCompra.appendChild(formClonado)

    formClonado.id = 'formClonado' + codigoDetalleSum

    const nuevaId = formClonado.id

    let nuevoForm = document.getElementById(nuevaId)

    nuevoForm.querySelector('#codigoDetalle').value = codigoDetalleSum

    console.log(detallesCompra)
    console.log(nuevaId)
}