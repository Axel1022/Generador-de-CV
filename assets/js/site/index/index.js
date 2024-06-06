//#region Variables globales

//#region Informacion Personal
let inputNombre = document.getElementById("nombre");
let inputTitulo = document.getElementById("titulo");
let inputCorreo = document.getElementById("correo");
let inputTelefono = document.getElementById("telefono");
let inputFechaNacimiento = document.getElementById("fecha-nacimiento");
let inputLinkedin = document.getElementById("linkedin");
//#endregion

//#region Habilidades
let inputHabilidad = document.getElementById("habilidad");
let inputPuntuacionHabilidad = document.getElementById("puntuacion-habilidad");
//#endregion

//#region Software
let inputSoftware = document.getElementById("software");
let inputSoftwarePoint = document.getElementById("puntuacion-software");
//#endregion

//#region Idiomas
let inputIdioma = document.getElementById("idioma");
let inputIdiomaPoint = document.getElementById("puntuacion-idioma");
//#endregion

//#region Resumen
let inputResumen = document.getElementById("resumen-profesional");
//#endregion

//#region Experiencia Laboral
let inputEmpresa = document.getElementById("empresa");
let inputFechaInicioEmpresa = document.getElementById("fecha-inicio");
let inputFechaFinEmpresa = document.getElementById("fecha-fin");
//#endregion

//#region Educación
let inputInstituto = document.getElementById("instituto");
let inputFechaInicioInstituto = document.getElementById(
  "fecha-inicio-educacion"
);
let inputFechaFinInstituto = document.getElementById("fecha-fin-educacion");
//#endregion

//#region Certificaciones
let inputCertificacion = document.getElementById("certificacion");
let inputFechaInicioCertificacion = document.getElementById(
  "fecha-inicio-certificacion"
);
let inputFechaFinCerticicacion = document.getElementById(
  "fecha-fin-certificacion"
);
//#endregion

//#endregion

function validate() {
  let isValid = true;

  //#region Informacion Personal
  isValid = inputValidator(inputNombre, isValid);
  isValid = inputValidator(inputTitulo, isValid);
  isValid = inputValidator(inputCorreo, isValid);
  isValid = inputValidator(inputTelefono, isValid);
  isValid = inputValidator(inputFechaNacimiento, isValid);
  isValid = inputValidator(inputLinkedin, isValid);
  //#endregion

  //#region Habilidades
  isValid = inputValidator(inputHabilidad, isValid);
  isValid = inputValidator(inputPuntuacionHabilidad, isValid);
  //#endregion

  //#region Software
  isValid = inputValidator(inputSoftware, isValid);
  isValid = inputValidator(inputSoftwarePoint, isValid);
  //#endregion

  //#region Idiomas
  isValid = inputValidator(inputIdioma, isValid);
  isValid = inputValidator(inputIdiomaPoint, isValid);
  //#endregion

  //#region Resumen
  isValid = inputValidator(inputResumen, isValid);
  //#endregion

  //#region Experiencia Laboral
  isValid = inputValidator(inputEmpresa, isValid);
  isValid = inputValidator(inputFechaInicioEmpresa);
  isValid = inputValidator(inputFechaFinEmpresa);
  //#endregion

  //#region Educación
  isValid = inputValidator(inputInstituto, isValid);
  isValid = inputValidator(inputFechaInicioInstituto);
  isValid = inputValidator(inputFechaFinInstituto, isValid);
  //#endregion

  //#region Certificaciones
  isValid = inputValidator(inputCertificacion, isValid);
  isValid = inputValidator(inputFechaInicioCertificacion);
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
    return isValid;
  }
}
