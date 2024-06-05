function validate() {
  let isValid = true;

  //#region Informacion Personal
  let inputNombre = document.getElementById("nombre");
  let inputTitulo = document.getElementById("titulo");
  isValid = inputValidator(inputNombre, isValid);
  isValid = inputValidator(inputTitulo, isValid);

  let inputCorreo = document.getElementById("correo");
  let inputTelefono = document.getElementById("telefono");
  isValid = inputValidator(inputCorreo, isValid);
  isValid = inputValidator(inputTelefono, isValid);

  let inputFechaNacimiento = document.getElementById("fecha-nacimiento");
  let inputLinkedin = document.getElementById("linkedin");
  isValid = inputValidator(inputFechaNacimiento, isValid);
  isValid = inputValidator(inputLinkedin, isValid);
  //#endregion

  //#region Habilidades
  let inputHabilidad = document.getElementById("habilidad");
  isValid = inputValidator(inputHabilidad, isValid);
  let inputPuntuacionHabilidad = document.getElementById(
    "puntuacion-habilidad"
  );
  isValid = inputValidator(inputPuntuacionHabilidad, isValid);
  //#endregion

  //#region Software
  let inputSoftware = document.getElementById("software");
  isValid = inputValidator(inputSoftware, isValid);
  let inputSoftwarePoint = document.getElementById("puntuacion-software");
  isValid = inputValidator(inputSoftwarePoint, isValid);
  //#endregion

  //#region Idiomas
  let inputIdioma = document.getElementById("idioma");
  isValid = inputValidator(inputIdioma, isValid);
  let inputIdiomaPoint = document.getElementById("puntuacion-idioma");
  isValid = inputValidator(inputIdiomaPoint, isValid);
  //#endregion

  //#region Resumen
  let inputResumen = document.getElementById("resumen-profesional");
  isValid = inputValidator(inputResumen, isValid);
  //#endregion

  //#region Experiencia Laboral
  let inputEmpresa = document.getElementById("empresa");
  isValid = inputValidator(inputEmpresa, isValid);
  let inputFechaInicioEmpresa = document.getElementById("fecha-inicio");
  isValid = inputValidator(inputFechaInicioEmpresa);
  let inputFechaFinEmpresa = document.getElementById("fecha-fin");
  isValid = inputValidator(inputFechaFinEmpresa);
  //#endregion

  //#region Educación
  let inputInstituto = document.getElementById("instituto");
  isValid = inputValidator(inputInstituto, isValid);
  let inputFechaInicioInstituto = document.getElementById(
    "fecha-inicio-educacion"
  );
  isValid = inputValidator(inputFechaInicioInstituto);
  let inputFechaFinInstituto = document.getElementById("fecha-fin-educacion");
  isValid = inputValidator(inputFechaFinInstituto, isValid);
  //#endregion

  //#region Certificaciones
  let inputCertificacion = document.getElementById("certificacion");
  isValid = inputValidator(inputCertificacion, isValid);
  let inputFechaInicioCertificacion = document.getElementById(
    "fecha-inicio-certificacion"
  );
  isValid = inputValidator(inputFechaInicioCertificacion);
  let inputFechaFinCerticicacion = document.getElementById(
    "fecha-fin-certificacion"
  );
  isValid = inputValidator(inputFechaFinCerticicacion, isValid);
  //#endregion

  //#region Validacion
  if (isValid) {
    alert("OK");
  } else {
    alert("Please complete the form");
  }
  //#endregion
}
function inputValidator(element, isValid) {
  const inputValue = element.value;
  if (inputValue == "" || inputValue == undefined || inputValue == null) {
    element.classList.remove("input-success");
    element.classList.add("input-error");
    return false;
  } else {
    element.classList.remove("input-error");
    element.classList.add("input-success");
    // No alerts here
    return isValid;
  }
}
