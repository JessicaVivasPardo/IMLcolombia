/*En este archivo se contruye la validacion del formulario de programación del servicio*/
function validService() {
  let name = document.getElementById("inputName").value;
  let date = document.getElementById("inputDate").value;
  let adress = document.getElementById("inputAdress").value;
  let tel = document.getElementById("inputTel").value;
  let email = document.getElementById("inputEmail").value;
  let option1 = document.getElementById('gridCheck1').checked;
  let option2 = document.getElementById('gridCheck2').checked;
  let option3 = document.getElementById('gridCheck3').checked;
  let option4 = document.getElementById('gridCheck4').checked;
  let option5 = document.getElementById('gridCheck5').checked;
  let option6 = document.getElementById('gridCheck6').checked;


  console.log(name);
  console.log(date);
  console.log(adress);
  console.log(tel);
  console.log(email);
  console.log(option1);
  console.log(option2);
  console.log(option3);
  console.log(option4);
  console.log(option5);
  console.log(option6);


  // Campo nombre

  if (name == null || name.length == 0) {
    alert('Error, el campo "Nombre" no puede ir vacío ni incompleto');

    return false;

  } else {
    if (/^([0-9])*$/.test(name)) {
      alert('El campo "Nombre" no debe tener números');

      return false;
    } else {
      
      if (!/^[A-Za-z\_\-\.\s\xF1\xD1]+$/.test(name)) {
        alert(
          'Error, el campo "Nombre" no debe contener caracteres especiales'
        );

        return false;
      }
    }
  }
  //Campo fecha 

  if( date == null || date.length == 0){
    alert('Debe registrar una fecha');
  }
  //Campo direccion 
  if(adress == null || adress.length == 0){
    alert('Error, el campo "Dirección" no debe ir vacío');
    return false;
  }

  //Campo teléfono
  if (tel == null || tel.length == 0) {
    alert('Error, el campo "Teléfono" no debe ir vacío');

    return false;
  } else {
    if (isNaN(tel)) {
      alert('Error, el campo "Teléfono" no puede llevar letras');

      return false;
    }
  }

  //Campo email
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) {
    alert('Error, debe escribir un correo valido');

    return false;
  }

  //Campo servicios
  if(!option1 && !option2 && !option3 && !option4 && !option5 && !option6){
    alert('Debe seleccionar al menos un servicio');
    return false;
  }
}