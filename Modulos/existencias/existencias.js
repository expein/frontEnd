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
    let cantidad, factura, price, product, description, fecha;

    cantidad = document.getElementById('cantidad').value
    factura = document.getElementById("factura").value
    price = document.getElementById('price').value
    product = document.getElementById('product').value
    description = document.getElementById('description').value
    fecha = document.getElementById('fecha').value

    let verificar = validar(cantidad, factura, price, product, description, fecha)

    if(verificar === true){
        let op = confirm('Esta seguro que desea registrar el proveedor')
        return op
    }else{
        return false
    }
}

const validar = (cantidad, factura, price, product, description, fecha)=>{
    let = validate = true;

    if (
      cantidad.trim() == "" ||
      factura.trim() == "" ||
      price.trim() == "" ||
      product.trim() == 0 ||
      description.trim() == "" ||
      fecha.trim() == ""
    ) {
        validate = false;
        alert('Campos sin llenar')
    }else if(isNaN(cantidad) || isNaN(price)){
        validate = false;
        alert('El campo cantidad o precio deben ser numericos')
    }

    return validate
}

const editar = ()=>{
    window.open('file:///c%3A/Users/SENA/Downloads/pageMatissa%20v2-20230824T192507Z-001/pageMatissa%20v3/Modulos/compras/edtarCompra.html', 'Editar compra', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=800,height=700,left = 390,top = 50')
}

const cerrar = ()=>{
   window.close()
}