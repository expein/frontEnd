// Función para validar el formulario
function validarFormulario() {
    // Obtiene los valores de los campos
    var product = document.getElementById("product").value;
    var fecha = document.getElementById("fecha").value;
    var cantidad = document.getElementById("cantidad").value;
    var cliente = document.getElementById("cliente").value;
  
    // Realiza las validaciones
    if (product === "0") {
      alert("Por favor, seleccione un producto.");
      return false;
    }
  
    if (fecha === "") {
      alert("Por favor, ingrese una fecha válida.");
      return false;
    }
  
    if (!validarCantidad(cantidad)) {
      alert("La cantidad debe ser un número válido y mayor que cero.");
      return false;
    }
  
    if (!validarCliente(cliente)) {
      alert("El nombre del cliente no puede estar vacío.");
      return false;
    }
  
    // Si todas las validaciones pasan, el formulario se enviará
    return true;
  }
  
  // Función para validar la cantidad
  function validarCantidad(cantidad) {
    cantidad = parseFloat(cantidad);
    return !isNaN(cantidad) && cantidad > 0;
  }
  
  // Función para validar el cliente
  function validarCliente(cliente) {
    return cliente.trim() !== "";
  }
  
  // Función para cerrar el formulario
  function cerrar() {
    // Agrega aquí la lógica para cerrar el formulario o realizar otras acciones
  }
  