function crearRamoHTML(ramo, id) {
  const div = document.createElement("div");
  div.className = "ramo";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = id;
  checkbox.checked = localStorage.getItem(id) === "true";
  if (checkbox.checked) div.classList.add("aprobado");

  checkbox.addEventListener("change", () => {
    localStorage.setItem(id, checkbox.checked);
    div.classList.toggle("aprobado", checkbox.checked);
  });

  const etiqueta = document.createElement("label");
  etiqueta.htmlFor = id;
  etiqueta.innerHTML = `<strong>${ramo.nombre}</strong><br>
    📌 Tipo: ${ramo.tipo} <br>
    🪴 Requisitos: ${ramo.requisitos.length ? ramo.requisitos.join(", ") : "ninguno"} <br>
    🎓 Créditos: ${ramo.creditos ?? "sin información"}`;

  div.appendChild(checkbox);
  div.appendChild(etiqueta);
  return div;
}

function mostrarMalla(malla) {
  const contenedor = document.getElementById("contenedor-malla");
  Object.entries(malla).forEach(([anio, semestres]) => {
    const seccionAnio = document.createElement("div");
    seccionAnio.className = "anio";
    seccionAnio.innerHTML = `<h2>📘 ${anio.replace(/([a-z])([A-Z])/g, '$1 $2')}</h2>`;

    Object.entries(semestres).forEach(([semestre, ramos]) => {
      const seccionSemestre = document.createElement("div");
      seccionSemestre.className = "semestre";
      seccionSemestre.innerHTML = `<h3>📖 ${semestre.replace(/([a-z])([A-Z])/g, '$1 $2')}</h3>`;

      ramos.forEach((ramo, index) => {
        const id = `${anio}-${semestre}-${index}`;
        const ramoHTML = crearRamoHTML(ramo, id);
        seccionSemestre.appendChild(ramoHTML);
      });

      seccionAnio.appendChild(seccionSemestre);
    });

    contenedor.appendChild(seccionAnio);
  });
}

mostrarMalla(mallaCurricular);
