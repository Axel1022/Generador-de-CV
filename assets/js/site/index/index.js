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

  return isValid;
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
function generarCv() {
  if (!validate()) {
    alert("Please complete the form");
  } else {
    // Obtener el contenedor donde se insertará el contenido
    let cvContainer = document.getElementById("cv-container");
    let valueNombre = inputNombre.value;
    let valueTitulo = inputTitulo.value;
    let valueCorreo = inputCorreo.value;
    let valueTelefono = inputTelefono.value;
    let valueFechaNacimiento = inputFechaNacimiento.value;
    let valueLinkedin = inputLinkedin.value;
    let valueHabilidad = inputHabilidad.value;
    let valuePuntuacionHabilidad = inputPuntuacionHabilidad.value;
    let valueSoftware = inputSoftware.value;
    let valueSoftwarePoint = inputSoftwarePoint.value;
    let valueIdioma = inputIdioma.value;
    let valueIdiomaPoint = inputIdiomaPoint.value;
    let valueResumen = inputResumen.value;
    let valueEmpresa = inputEmpresa.value;
    let valueFechaInicioEmpresa = inputFechaInicioEmpresa.value;
    let valueFechaFinEmpresa = inputFechaFinEmpresa.value;
    let valueInstituto = inputInstituto.value;
    let valueFechaInicioInstituto = inputFechaInicioInstituto.value;
    let valueFechaFinInstituto = inputFechaFinInstituto.value;
    let valueCertificacion = inputCertificacion.value;
    let valueFechaInicioCertificacion = inputFechaInicioCertificacion.value;
    let valueFechaFinCerticicacion = inputFechaFinCerticicacion.value;

    // Crear los elementos del CV
    let col12 = document.createElement("div");
    col12.className = "col-12 mb-4";

    let h3 = document.createElement("h3");
    h3.className = "text-center";
    h3.textContent = "Curriculum Vitae";
    col12.appendChild(h3);
    cvContainer.appendChild(col12);

    let divLeft = document.createElement("div");
    divLeft.id = "div-left";
    divLeft.className = "col-md-4 mb-4";

    let card = document.createElement("div");
    card.className = "card shadow-sm";

    // Información Personal
    let cardBodyPersonal = document.createElement("div");
    cardBodyPersonal.className = "card-body";

    let h4Personal = document.createElement("h4");
    h4Personal.className = "card-title";
    h4Personal.textContent = "Información Personal";
    cardBodyPersonal.appendChild(h4Personal);

    let pNombre = document.createElement("p");
    pNombre.id = "cv-nombre";
    pNombre.innerHTML = `<strong>Nombre:</strong> ${valueNombre}`;
    cardBodyPersonal.appendChild(pNombre);

    let pTitulo = document.createElement("p");
    pTitulo.id = "cv-titulo";
    pTitulo.innerHTML = `<strong>Título:</strong> ${valueTitulo}`;
    cardBodyPersonal.appendChild(pTitulo);

    let pCorreo = document.createElement("p");
    pCorreo.id = "cv-correo";
    pCorreo.innerHTML = `<strong>Correo:</strong> ${valueCorreo}`;
    cardBodyPersonal.appendChild(pCorreo);

    let pTelefono = document.createElement("p");
    pTelefono.id = "cv-telefono";
    pTelefono.innerHTML = `<strong>Teléfono:</strong> ${valueTelefono}`;
    cardBodyPersonal.appendChild(pTelefono);

    let pFechaNacimiento = document.createElement("p");
    pFechaNacimiento.id = "cv-fecha-nacimiento";
    pFechaNacimiento.innerHTML = `<strong>Fecha de Nacimiento:</strong> ${valueFechaNacimiento}`;
    cardBodyPersonal.appendChild(pFechaNacimiento);

    let pLinkedin = document.createElement("p");
    pLinkedin.id = "cv-linkedin";
    pLinkedin.innerHTML = `<strong>LinkedIn:</strong> <a href="${valueLinkedin}" target="_blank">${valueLinkedin}</a>`;
    cardBodyPersonal.appendChild(pLinkedin);

    card.appendChild(cardBodyPersonal);

    // Habilidades
    let cardBodyHabilidades = document.createElement("div");
    cardBodyHabilidades.className = "card-body";

    let h4Habilidades = document.createElement("h4");
    h4Habilidades.className = "card-title";
    h4Habilidades.textContent = "Habilidades";
    cardBodyHabilidades.appendChild(h4Habilidades);

    let ulHabilidades = document.createElement("ul");
    ulHabilidades.className = "list-unstyled";
    ulHabilidades.id = "cv-habilidades";

    let liHabilidad = document.createElement("li");
    liHabilidad.className = "d-flex justify-content-between";
    liHabilidad.innerHTML = `<span>${valueHabilidad}</span><span>${valuePuntuacionHabilidad}</span>`;
    ulHabilidades.appendChild(liHabilidad);

    cardBodyHabilidades.appendChild(ulHabilidades);
    card.appendChild(cardBodyHabilidades);

    // Software
    let cardBodySoftware = document.createElement("div");
    cardBodySoftware.className = "card-body";

    let h4Software = document.createElement("h4");
    h4Software.className = "card-title";
    h4Software.textContent = "Software";
    cardBodySoftware.appendChild(h4Software);

    let ulSoftware = document.createElement("ul");
    ulSoftware.className = "list-unstyled";
    ulSoftware.id = "cv-software";

    let liSoftware = document.createElement("li");
    liSoftware.className = "d-flex justify-content-between";
    liSoftware.innerHTML = `<span>${valueSoftware}</span><span>${valueSoftwarePoint}</span>`;
    ulSoftware.appendChild(liSoftware);

    cardBodySoftware.appendChild(ulSoftware);
    card.appendChild(cardBodySoftware);

    // Idiomas
    let cardBodyIdiomas = document.createElement("div");
    cardBodyIdiomas.className = "card-body";

    let h4Idiomas = document.createElement("h4");
    h4Idiomas.className = "card-title";
    h4Idiomas.textContent = "Idiomas";
    cardBodyIdiomas.appendChild(h4Idiomas);

    let ulIdiomas = document.createElement("ul");
    ulIdiomas.className = "list-unstyled";
    ulIdiomas.id = "cv-idiomas";

    let liIdioma = document.createElement("li");
    liIdioma.className = "d-flex justify-content-between";
    liIdioma.innerHTML = `<span>${valueIdioma}</span><span>${valueIdiomaPoint}</span>`;
    ulIdiomas.appendChild(liIdioma);

    cardBodyIdiomas.appendChild(ulIdiomas);
    card.appendChild(cardBodyIdiomas);

    divLeft.appendChild(card);
    cvContainer.appendChild(divLeft);

    let divRight = document.createElement("div");
    divRight.id = "div-right";
    divRight.className = "col-md-8";

    let sections = [
      {
        title: "Resumen Profesional",
        content: `${valueResumen}`,
      },
      {
        title: "Experiencia Laboral",
        content: `<p><strong>Empresa:</strong> ${valueEmpresa}</p><p><strong>Duración:</strong> ${valueFechaInicioEmpresa} - ${valueFechaFinEmpresa}</p>`,
      },
      {
        title: "Educación",
        content: `<p><strong>Institución:</strong>${valueInstituto}</p><p><strong>Duración:</strong> ${valueFechaInicioInstituto} - ${valueFechaFinInstituto}</p>`,
      },
      {
        title: "Certificaciones",
        content: `<p><strong>Certificacion:</strong> ${valueCertificacion}</p><p><strong>Duración:</strong> ${valueFechaInicioCertificacion} - ${valueFechaFinCerticicacion}</p>`,
      },
    ];

    sections.forEach(function (section) {
      let cardSection = document.createElement("div");
      cardSection.className = "card mb-4 shadow-sm";

      let cardBodySection = document.createElement("div");
      cardBodySection.className = "card-body";

      let h4Section = document.createElement("h4");
      h4Section.className = "card-title";
      h4Section.textContent = section.title;
      cardBodySection.appendChild(h4Section);

      let pSection = document.createElement("p");
      pSection.innerHTML = section.content;
      cardBodySection.appendChild(pSection);

      cardSection.appendChild(cardBodySection);
      divRight.appendChild(cardSection);
    });

    cvContainer.appendChild(divRight);
  }
}

// Para propósitos de demostración, llamar a generarCv() al cargar la página
