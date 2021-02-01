function validForm() {
  let txtNombre = document.getElementById("inputName").value;
  let txtCorreo = document.getElementById("inputEmail").value;
  let txtTelefono = document.getElementById("inputTel").value;
  let txtMensaje = document.getElementById("inputMensaje").value;

  console.log(txtNombre);
  console.log(txtCorreo);
  console.log(txtTelefono);
  console.log(txtMensaje);

  if (txtNombre == null || txtNombre.length == 0) {
    alert('Error, el campo "Nombre" no puede ir vacío ni incompleto');

    return false;

  } else {
    if (/^([0-9])*$/.test(txtNombre)) {
      alert('El campo "Nombre" no debe tener números');

      return false;
    } else {
      
      if (!/^[A-Za-z\_\-\.\s\xF1\xD1]+$/.test(txtNombre)) {
        alert(
          'Error, el campo "Nombre" no debe contener caracteres especiales'
        );

        return false;
      }
    }
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(txtCorreo)) {
    alert('Error, debe escribir un correo valido');

    return false;
  }

  if (txtTelefono == null || txtTelefono.length == 0) {
    alert('Error, el campo "Teléfono" no debe ir vacío');

    return false;
  } else {
    if (isNaN(txtTelefono)) {
      alert('Error, el campo "Teléfono" no puede llevar letras');

      return false;
    }
  }

  if (txtMensaje == null || txtMensaje.length == 0) {
    alert('Error, el campo "Mensaje" debe ir lleno');
    return false;
  }
  
}
