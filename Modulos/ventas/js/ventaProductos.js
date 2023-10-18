function validacion() {
    // Get input field values
    var cliente = document.getElementById("cliente").value.trim();
    var cantidad = document.getElementById("cantidad").value.trim();
    var pTotal = document.getElementById("pTotal").value.trim();
    var fecha = document.getElementById("fecha").value.trim();
  
    // Validate that Cliente is not empty
    if (cliente === "") {
      alert("Por favor, ingrese el nombre del cliente.");
      return false;
    }
  
    // Validate that Cantidad is a positive number
    if (!isNumeric(cantidad) || cantidad <= 0) {
      alert("La cantidad debe ser un número positivo.");
      return false;
    }
  
    // Validate that Precio Total is a positive number
    if (!isNumeric(pTotal) || pTotal <= 0) {
      alert("El precio total debe ser un número positivo.");
      return false;
    }
  
    // Validate the Fecha field
    if (!isValidDate(fecha)) {
      alert("La fecha ingresada no es válida.");
      return false;
    }
  
    // If all validations pass, the form will submit
    return true;
  }
  
  function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }
  
  function isValidDate(dateString) {
    var regexDate = /^\d{4}-\d{2}-\d{2}$/;
    if (!regexDate.test(dateString)) return false;
    var date = new Date(dateString);
    return !isNaN(date.getTime());
  }
  
  function cerrar() {
    // Add your logic to close the form or perform other actions here
  }
  