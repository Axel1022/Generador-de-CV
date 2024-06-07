//#region letiables globales

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
let inputSoftware = document.getElementById("software1");
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
  isValid = inputValidator(inputFechaInicioEmpresa, isValid);
  isValid = inputValidator(inputFechaFinEmpresa, isValid);
  //#endregion

  //#region Educación
  isValid = inputValidator(inputInstituto, isValid);
  isValid = inputValidator(inputFechaInicioInstituto, isValid);
  isValid = inputValidator(inputFechaFinInstituto, isValid);
  //#endregion

  //#region Certificaciones
  isValid = inputValidator(inputCertificacion, isValid);
  isValid = inputValidator(inputFechaInicioCertificacion, isValid);
  isValid = inputValidator(inputFechaFinCerticicacion, isValid);
  //#endregion

  //#region Dinámicamente Agregados
  document.querySelectorAll(".agregadoDinamicamente").forEach((element) => {
    isValid = inputValidator(element, isValid);
  });
  //#endregion

  return isValid;
}
function limpiarFormulario() {
  // Limpia los campos del formulario
  inputNombre.value = "";
  inputNombre.focus();
  inputTitulo.value = "";
  inputCorreo.value = "";
  inputTelefono.value = "";
  inputFechaNacimiento.value = "";
  inputLinkedin.value = "";

  inputNombre.classList.remove("input-error");
  inputNombre.classList.remove("input-success");
  inputTitulo.classList.remove("input-error");
  inputTitulo.classList.remove("input-success");
  inputCorreo.classList.remove("input-error");
  inputCorreo.classList.remove("input-success");
  inputTelefono.classList.remove("input-error");
  inputTelefono.classList.remove("input-success");
  inputFechaNacimiento.classList.remove("input-error");
  inputFechaNacimiento.classList.remove("input-success");
  inputLinkedin.classList.remove("input-error");
  inputLinkedin.classList.remove("input-success");

  inputHabilidad.value = "";
  inputPuntuacionHabilidad.selectedIndex = 0;

  inputHabilidad.classList.remove("input-error");
  inputHabilidad.classList.remove("input-success");
  inputPuntuacionHabilidad.classList.remove("input-error");
  inputPuntuacionHabilidad.classList.remove("input-success");

  inputSoftware.value = "";
  inputSoftwarePoint.selectedIndex = 0;

  inputSoftware.classList.remove("input-error");
  inputSoftware.classList.remove("input-success");
  inputSoftwarePoint.classList.remove("input-error");
  inputSoftwarePoint.classList.remove("input-success");

  inputIdioma.value = "";
  inputIdiomaPoint.selectedIndex = 0;

  inputIdioma.classList.remove("input-error");
  inputIdioma.classList.remove("input-success");
  inputIdiomaPoint.classList.remove("input-error");
  inputIdiomaPoint.classList.remove("input-success");

  inputResumen.value = "";

  inputResumen.classList.remove("input-error");
  inputResumen.classList.remove("input-success");

  inputEmpresa.value = "";
  inputFechaInicioEmpresa.value = "";
  inputFechaFinEmpresa.value = "";

  inputEmpresa.classList.remove("input-error");
  inputEmpresa.classList.remove("input-success");
  inputFechaInicioEmpresa.classList.remove("input-error");
  inputFechaInicioEmpresa.classList.remove("input-success");
  inputFechaFinEmpresa.classList.remove("input-error");
  inputFechaFinEmpresa.classList.remove("input-success");

  inputInstituto.value = "";
  inputFechaInicioInstituto.value = "";
  inputFechaFinInstituto.value = "";

  inputInstituto.classList.remove("input-error");
  inputInstituto.classList.remove("input-success");
  inputFechaInicioInstituto.classList.remove("input-error");
  inputFechaInicioInstituto.classList.remove("input-success");
  inputFechaFinInstituto.classList.remove("input-error");
  inputFechaFinInstituto.classList.remove("input-success");

  inputCertificacion.value = "";
  inputFechaInicioCertificacion.value = "";
  inputFechaFinCertificacion.value = "";

  inputCertificacion.classList.remove("input-error");
  inputCertificacion.classList.remove("input-success");
  inputFechaInicioCertificacion.classList.remove("input-error");
  inputFechaInicioCertificacion.classList.remove("input-success");
  inputFechaFinCertificacion.classList.remove("input-error");
  inputFechaFinCertificacion.classList.remove("input-success");
}

function unoMasCertificacion() {
  const divUnoMas = document.getElementById("unoMasCertificacion");
  divUnoMas.className = "row mb-3";

  const divCol1 = document.createElement("div");
  divCol1.className = "col-md-4 mb-3";

  const divCol2 = document.createElement("div");
  divCol2.className = "col-md-4 mb-3";

  const divCol3 = document.createElement("div");
  divCol3.className = "col-md-4 mb-3";

  const inputCertificacioNew = document.createElement("input");
  inputCertificacioNew.className = "form-control agregadoDinamicamente";
  inputCertificacioNew.placeholder = "Certificacion";
  inputCertificacioNew.type = "text";

  const inputFechaInicioNew = document.createElement("input");
  inputFechaInicioNew.className = "form-control agregadoDinamicamente";
  inputFechaInicioNew.type = "date";

  const inputFechaFinNew = document.createElement("input");
  inputFechaFinNew.className = "form-control agregadoDinamicamente";
  inputFechaFinNew.type = "date";

  divCol1.appendChild(inputCertificacioNew);
  divCol2.appendChild(inputFechaInicioNew);
  divCol3.appendChild(inputFechaFinNew);

  divUnoMas.appendChild(divCol1);
  divUnoMas.appendChild(divCol2);
  divUnoMas.appendChild(divCol3);
}
function unoMasEducacion() {
  const divUnoMas = document.getElementById("unoMasEducacion");
  divUnoMas.className = "row mb-3";

  const divCol1 = document.createElement("div");
  divCol1.className = "col-md-4 mb-3";

  const divCol2 = document.createElement("div");
  divCol2.className = "col-md-4 mb-3";

  const divCol3 = document.createElement("div");
  divCol3.className = "col-md-4 mb-3";

  const inputEmpresaNew = document.createElement("input");
  inputEmpresaNew.className = "form-control agregadoDinamicamente";
  inputEmpresaNew.placeholder = "Educacion";
  inputEmpresaNew.type = "text";

  const inputFechaInicioNew = document.createElement("input");
  inputFechaInicioNew.className = "form-control agregadoDinamicamente";
  inputFechaInicioNew.type = "date";

  const inputFechaFinNew = document.createElement("input");
  inputFechaFinNew.className = "form-control agregadoDinamicamente";
  inputFechaFinNew.type = "date";

  divCol1.appendChild(inputEmpresaNew);
  divCol2.appendChild(inputFechaInicioNew);
  divCol3.appendChild(inputFechaFinNew);

  divUnoMas.appendChild(divCol1);
  divUnoMas.appendChild(divCol2);
  divUnoMas.appendChild(divCol3);
}
function unoMasExperiencia() {
  const divUnoMas = document.getElementById("unoMasExperiencia");
  divUnoMas.className = "row mb-3";

  const divCol1 = document.createElement("div");
  divCol1.className = "col-md-4 mb-3";

  const divCol2 = document.createElement("div");
  divCol2.className = "col-md-4 mb-3";

  const divCol3 = document.createElement("div");
  divCol3.className = "col-md-4 mb-3";

  const inputEmpresaNew = document.createElement("input");
  inputEmpresaNew.className = "form-control agregadoDinamicamente";
  inputEmpresaNew.placeholder = "Empresa";
  inputEmpresaNew.type = "text";

  const inputFechaInicioNew = document.createElement("input");
  inputFechaInicioNew.className = "form-control agregadoDinamicamente";
  inputFechaInicioNew.type = "date";

  const inputFechaFinNew = document.createElement("input");
  inputFechaFinNew.className = "form-control agregadoDinamicamente";
  inputFechaFinNew.type = "date";

  divCol1.appendChild(inputEmpresaNew);
  divCol2.appendChild(inputFechaInicioNew);
  divCol3.appendChild(inputFechaFinNew);

  divUnoMas.appendChild(divCol1);
  divUnoMas.appendChild(divCol2);
  divUnoMas.appendChild(divCol3);
}
function unoMasIdioma() {
  const divUnoMas = document.getElementById("unoMasIdioma");
  divUnoMas.className = "row mb-3";

  const divCol = document.createElement("div");
  divCol.className = "col-md-8 mb-3";

  const labelIdi = document.createElement("label");
  labelIdi.className = "sr-only";
  labelIdi.textContent = "Idioma:";

  const inputIdiomaNew = document.createElement("input");
  inputIdiomaNew.className = "form-control agregadoDinamicamente";
  inputIdiomaNew.placeholder = "Idioma";

  divCol.appendChild(labelIdi);
  divCol.appendChild(inputIdiomaNew);

  const divColMd = document.createElement("div");
  divColMd.className = "col-md-4 mb-3";

  const labelPuntuacion = document.createElement("label");
  labelPuntuacion.className = "sr-only";
  labelPuntuacion.textContent = "Puntuación:";

  const selectPuntuacion = document.createElement("select");
  selectPuntuacion.className = "form-control agregadoDinamicamente";

  const optionDefault = document.createElement("option");
  optionDefault.value = "";
  optionDefault.textContent = "Elige una puntuación";
  selectPuntuacion.appendChild(optionDefault);

  for (let i = 1; i <= 5; i++) {
    const option = document.createElement("option");
    option.value = i.toString();
    option.textContent = i.toString();
    selectPuntuacion.appendChild(option);
  }

  divColMd.appendChild(labelPuntuacion);
  divColMd.appendChild(selectPuntuacion);

  divUnoMas.appendChild(divCol);
  divUnoMas.appendChild(divColMd);
}
function unoMasSoftwere() {
  const divUnoMas = document.getElementById("unoMasSoftwere");
  divUnoMas.className = "row mb-3";

  const divCol = document.createElement("div");
  divCol.className = "col-md-8 mb-3";

  const labelSof = document.createElement("label");
  labelSof.className = "sr-only";
  labelSof.textContent = "Software:";

  const inputSoftwareNew = document.createElement("input");
  inputSoftwareNew.className = "form-control agregadoDinamicamente";
  inputSoftwareNew.placeholder = "Ej: Photoshop ";

  divCol.appendChild(labelSof);
  divCol.appendChild(inputSoftwareNew);

  const divColMd = document.createElement("div");
  divColMd.className = "col-md-4 mb-3";

  const labelPuntuacion = document.createElement("label");
  labelPuntuacion.className = "sr-only";
  labelPuntuacion.textContent = "Puntuación:";

  const selectPuntuacion = document.createElement("select");
  selectPuntuacion.className = "form-control agregadoDinamicamente";

  const optionDefault = document.createElement("option");
  optionDefault.value = "";
  optionDefault.textContent = "Elige una puntuación";
  selectPuntuacion.appendChild(optionDefault);

  for (let i = 1; i <= 5; i++) {
    const option = document.createElement("option");
    option.value = i.toString();
    option.textContent = i.toString();
    selectPuntuacion.appendChild(option);
  }

  divColMd.appendChild(labelPuntuacion);
  divColMd.appendChild(selectPuntuacion);

  divUnoMas.appendChild(divCol);
  divUnoMas.appendChild(divColMd);
}
function unoMasHabilidad() {
  const divUnoMas = document.getElementById("unoMasHabilidad");
  divUnoMas.className = "row mb-3";

  const divCol = document.createElement("div");
  divCol.className = "col-md-8 mb-3";

  const labelHabilidad = document.createElement("label");
  labelHabilidad.className = "sr-only";
  labelHabilidad.textContent = "Habilidad:";

  const inputTextHabilidad = document.createElement("input");
  inputTextHabilidad.className = "form-control agregadoDinamicamente";
  inputTextHabilidad.placeholder = "Ej: C#";

  divCol.appendChild(labelHabilidad);
  divCol.appendChild(inputTextHabilidad);

  const divColMd = document.createElement("div");
  divColMd.className = "col-md-4 mb-3";

  const labelPuntuacion = document.createElement("label");
  labelPuntuacion.className = "sr-only";
  labelPuntuacion.textContent = "Puntuación:";

  const selectPuntuacion = document.createElement("select");
  selectPuntuacion.className = "form-control agregadoDinamicamente";

  const optionDefault = document.createElement("option");
  optionDefault.value = "";
  optionDefault.textContent = "Elige una puntuación";
  selectPuntuacion.appendChild(optionDefault);

  for (let i = 1; i <= 5; i++) {
    const option = document.createElement("option");
    option.value = i.toString();
    option.textContent = i.toString();
    selectPuntuacion.appendChild(option);
  }

  divColMd.appendChild(labelPuntuacion);
  divColMd.appendChild(selectPuntuacion);

  divUnoMas.appendChild(divCol);
  divUnoMas.appendChild(divColMd);
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
function estrellas(cantidad) {
  let estrellas = "";
  let resto = 5 - cantidad;
  for (let i = 0; i < cantidad; i++) {
    estrellas += "★";
  }
  for (let i = 0; i < resto; i++) {
    estrellas += "✫";
  }
  return estrellas;
}

function generarCv() {
  if (!validate()) {
    alert("ERROR: COMPLETE EL FORMULARIO.");
    return;
  } else alert("CV GENERADO.");

  const cvContainer = document.getElementById("cv-container");

  while (cvContainer.firstChild) {
    cvContainer.removeChild(cvContainer.firstChild);
  }

  // Obtener los valores de los inputs
  const valueNombre = inputNombre.value;
  const valueTitulo = inputTitulo.value;
  const valueCorreo = inputCorreo.value;
  const valueTelefono = inputTelefono.value;
  const valueFechaNacimiento = inputFechaNacimiento.value;
  const valueLinkedin = inputLinkedin.value;
  const valueHabilidad = inputHabilidad.value;
  const valuePuntuacionHabilidad = inputPuntuacionHabilidad.value;
  const valueSoftware = inputSoftware.value;
  const valueSoftwarePoint = inputSoftwarePoint.value;
  const valueIdioma = inputIdioma.value;
  const valueIdiomaPoint = inputIdiomaPoint.value;
  const valueResumen = inputResumen.value;
  const valueEmpresa = inputEmpresa.value;
  const valueFechaInicioEmpresa = inputFechaInicioEmpresa.value;
  const valueFechaFinEmpresa = inputFechaFinEmpresa.value;
  const valueInstituto = inputInstituto.value;
  const valueFechaInicioInstituto = inputFechaInicioInstituto.value;
  const valueFechaFinInstituto = inputFechaFinInstituto.value;
  const valueCertificacion = inputCertificacion.value;
  const valueFechaInicioCertificacion = inputFechaInicioCertificacion.value;
  const valueFechaFinCerticicacion = inputFechaFinCerticicacion.value;

  // Crear los elementos del CV
  const col12 = document.createElement("div");
  col12.className = "col-12 mb-4";

  const h3 = document.createElement("h3");
  h3.className = "text-center";
  h3.textContent = "Curriculum Vitae";
  col12.appendChild(h3);
  cvContainer.appendChild(col12);

  const divLeft = document.createElement("div");
  divLeft.id = "div-left";
  divLeft.className = "col-md-4 mb-4";

  const card = document.createElement("div");
  card.className = "card shadow-sm";

  // Información Personal
  const cardBodyPersonal = document.createElement("div");
  cardBodyPersonal.className = "card-body shadow ";

  const h4Personal = document.createElement("h4");
  h4Personal.className = "card-title";
  h4Personal.textContent = "Información Personal";
  cardBodyPersonal.appendChild(h4Personal);

  const imgContainer = document.createElement("div");
  imgContainer.className = "text-center";
  const img = document.createElement("img");
  img.src = "./assets/img/adsad.JPG";
  img.alt = "YO PUES, QUIEN MAS?";
  img.className = "img-fluid rounded mb-3 shadow";
  img.style.width = "100px";
  imgContainer.appendChild(img);
  cardBodyPersonal.appendChild(imgContainer);

  const pNombre = document.createElement("p");
  pNombre.id = "cv-nombre";
  const strongNombre = document.createElement("strong");
  pNombre.appendChild(strongNombre);
  pNombre.appendChild(document.createTextNode(` ${valueNombre}`));
  cardBodyPersonal.appendChild(pNombre);

  const pTitulo = document.createElement("p");
  pTitulo.id = "cv-titulo";
  const strongTitulo = document.createElement("strong");
  pTitulo.appendChild(strongTitulo);
  pTitulo.appendChild(document.createTextNode(` ${valueTitulo}`));
  cardBodyPersonal.appendChild(pTitulo);

  const pCorreo = document.createElement("p");
  pCorreo.id = "cv-correo";
  const strongCorreo = document.createElement("strong");
  strongCorreo.textContent = "Correo:";
  pCorreo.appendChild(strongCorreo);
  pCorreo.appendChild(document.createTextNode(` ${valueCorreo}`));
  cardBodyPersonal.appendChild(pCorreo);

  const pTelefono = document.createElement("p");
  pTelefono.id = "cv-telefono";
  const strongTelefono = document.createElement("strong");
  strongTelefono.textContent = "Teléfono:";
  pTelefono.appendChild(strongTelefono);
  pTelefono.appendChild(document.createTextNode(` ${valueTelefono}`));
  cardBodyPersonal.appendChild(pTelefono);

  const pFechaNacimiento = document.createElement("p");
  pFechaNacimiento.id = "cv-fecha-nacimiento";
  const strongFechaNacimiento = document.createElement("strong");
  strongFechaNacimiento.textContent = "Fecha de Nacimiento:";
  pFechaNacimiento.appendChild(strongFechaNacimiento);
  pFechaNacimiento.appendChild(
    document.createTextNode(` ${valueFechaNacimiento}`)
  );
  cardBodyPersonal.appendChild(pFechaNacimiento);

  const pLinkedin = document.createElement("p");
  pLinkedin.id = "cv-linkedin";
  const strongLinkedin = document.createElement("strong");
  strongLinkedin.textContent = "LinkedIn:";
  pLinkedin.appendChild(strongLinkedin);
  const aLinkedin = document.createElement("a");
  aLinkedin.href = valueLinkedin;
  aLinkedin.target = "_blank";
  aLinkedin.textContent = valueLinkedin;
  pLinkedin.appendChild(aLinkedin);
  cardBodyPersonal.appendChild(pLinkedin);

  card.appendChild(cardBodyPersonal);

  // Habilidades
  const cardBodyHabilidades = document.createElement("div");
  cardBodyHabilidades.className = "card-body shadow";

  const h4Habilidades = document.createElement("h4");
  h4Habilidades.className = "card-title";
  h4Habilidades.textContent = "Habilidades";
  cardBodyHabilidades.appendChild(h4Habilidades);

  const ulHabilidades = document.createElement("ul");
  ulHabilidades.className = "list-unstyled";
  ulHabilidades.id = "cv-habilidades";

  const liHabilidad = document.createElement("li");
  liHabilidad.className = "d-flex justify-content-between";
  const spanHabilidad = document.createElement("span");
  spanHabilidad.textContent = valueHabilidad;
  const spanPuntuacionHabilidad = document.createElement("span");
  spanPuntuacionHabilidad.textContent = estrellas(valuePuntuacionHabilidad);
  liHabilidad.appendChild(spanHabilidad);
  liHabilidad.appendChild(spanPuntuacionHabilidad);
  ulHabilidades.appendChild(liHabilidad);

  cardBodyHabilidades.appendChild(ulHabilidades);
  card.appendChild(cardBodyHabilidades);

  // Software
  const cardBodySoftware = document.createElement("div");
  cardBodySoftware.className = "card-body shadow";

  const h4Software = document.createElement("h4");
  h4Software.className = "card-title";
  h4Software.textContent = "Software";
  cardBodySoftware.appendChild(h4Software);

  const ulSoftware = document.createElement("ul");
  ulSoftware.className = "list-unstyled";
  ulSoftware.id = "cv-software";

  const liSoftware = document.createElement("li");
  liSoftware.className = "d-flex justify-content-between";
  const spanSoftware = document.createElement("span");
  spanSoftware.textContent = valueSoftware;
  const spanPuntuacionSoftware = document.createElement("span");
  spanPuntuacionSoftware.textContent = estrellas(valueSoftwarePoint);
  liSoftware.appendChild(spanSoftware);
  liSoftware.appendChild(spanPuntuacionSoftware);
  ulSoftware.appendChild(liSoftware);

  cardBodySoftware.appendChild(ulSoftware);
  card.appendChild(cardBodySoftware);

  // Idiomas
  const cardBodyIdiomas = document.createElement("div");
  cardBodyIdiomas.className = "card-body shadow";

  const h4Idiomas = document.createElement("h4");
  h4Idiomas.className = "card-title";
  h4Idiomas.textContent = "Idiomas";
  cardBodyIdiomas.appendChild(h4Idiomas);

  const ulIdiomas = document.createElement("ul");
  ulIdiomas.className = "list-unstyled";
  ulIdiomas.id = "cv-idiomas";

  const liIdioma = document.createElement("li");
  liIdioma.className = "d-flex justify-content-between";
  const spanIdioma = document.createElement("span");
  spanIdioma.textContent = valueIdioma;
  const spanPuntuacionIdioma = document.createElement("span");
  spanPuntuacionIdioma.textContent = estrellas(valueIdiomaPoint);
  liIdioma.appendChild(spanIdioma);
  liIdioma.appendChild(spanPuntuacionIdioma);
  ulIdiomas.appendChild(liIdioma);

  cardBodyIdiomas.appendChild(ulIdiomas);
  card.appendChild(cardBodyIdiomas);

  divLeft.appendChild(card);
  cvContainer.appendChild(divLeft);

  const divRight = document.createElement("div");
  divRight.id = "div-right shadow";
  divRight.className = "col-md-8";

  const sections = [
    {
      title: "Resumen Profesional",
      content: valueResumen,
    },
    {
      title: "Experiencia Laboral",
      content: [
        { label: "Empresa", value: valueEmpresa },
        {
          label: "Duración",
          value: `${valueFechaInicioEmpresa} - ${valueFechaFinEmpresa}`,
        },
      ],
    },
    {
      title: "Educación",
      content: [
        { label: "Institución", value: valueInstituto },
        {
          label: "Duración",
          value: `${valueFechaInicioInstituto} - ${valueFechaFinInstituto}`,
        },
      ],
    },
    {
      title: "Certificaciones",
      content: [
        { label: "Certificación", value: valueCertificacion },
        {
          label: "Duración",
          value: `${valueFechaInicioCertificacion} - ${valueFechaFinCerticicacion}`,
        },
      ],
    },
  ];

  sections.forEach(function (section) {
    const cardSection = document.createElement("div");
    cardSection.className = "card mb-4 shadow";

    const cardBodySection = document.createElement("div");
    cardBodySection.className = "card-body";

    const h4Section = document.createElement("h4");
    h4Section.className = "card-title";
    h4Section.textContent = section.title;
    cardBodySection.appendChild(h4Section);

    if (Array.isArray(section.content)) {
      section.content.forEach((item) => {
        const pItem = document.createElement("p");
        const strongItem = document.createElement("strong");
        strongItem.textContent = `${item.label}:`;
        pItem.appendChild(strongItem);
        pItem.appendChild(document.createTextNode(` ${item.value}`));
        cardBodySection.appendChild(pItem);
      });
    } else {
      const pSection = document.createElement("p");
      pSection.textContent = section.content;
      cardBodySection.appendChild(pSection);
    }

    cardSection.appendChild(cardBodySection);
    divRight.appendChild(cardSection);
  });

  cvContainer.appendChild(divRight);

  limpiarFormulario();
}
//Al final no logre cargar en el cv los datos de los nuevos elementos dinamicos.
