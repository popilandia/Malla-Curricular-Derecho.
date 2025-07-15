// Variables para manejar estado
let ramosAprobados = new Set();

// Función para cargar ramos y mostrarlos
function mostrarMalla(malla) {
  const contenedor = document.getElementById("contenedor-malla");
  contenedor.innerHTML = "";

  for (const [anio, semestres] of Object.entries(malla)) {
    const tituloAnio = document.createElement("h2");
    tituloAnio.textContent = anio;
    contenedor.appendChild(tituloAnio);

    for (const [semestre, ramos] of Object.entries(semestres)) {
      const tituloSemestre = document.createElement("h3");
      tituloSemestre.textContent = semestre;
      contenedor.appendChild(tituloSemestre);

      const listaRamos = document.createElement("ul");

      ramos.forEach((ramo, index) => {
        const item = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `${anio}-${semestre}-${index}`;
        checkbox.checked = ramosAprobados.has(checkbox.id);
        checkbox.disabled = !puedeTomarRamo(ramo);
        checkbox.addEventListener("change", () => {
          if (checkbox.checked) {
            ramosAprobados.add(checkbox.id);
          } else {
            ramosAprobados.delete(checkbox.id);
          }
          actualizarMalla();
        });

        const label = document.createElement("label");
        label.htmlFor = checkbox.id;
        label.textContent = `${ramo.nombre} (${ramo.tipo}, créditos: ${ramo.creditos})`;

        item.appendChild(checkbox);
        item.appendChild(label);
        listaRamos.appendChild(item);
      });

      contenedor.appendChild(listaRamos);
    }
  }
}

// Verifica si se pueden tomar los requisitos del ramo
function puedeTomarRamo(ramo) {
  // Si no tiene requisitos, siempre se puede tomar
  if (!ramo.requisitos || ramo.requisitos.length === 0) return true;

  // Todos los requisitos deben estar aprobados
  return ramo.requisitos.every(reqId => ramosAprobados.has(reqId));
}

// Actualiza la malla cuando cambia el estado
function actualizarMalla() {
  mostrarMalla(mallaCurricular);
}

// Cuando cargue la página, mostrar la malla
window.onload = () => {
  mostrarMalla(mallaCurricular);
};
