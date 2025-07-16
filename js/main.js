const tareaInput = document.getElementById("tareaInput");
const agregarBtn = document.getElementById("agregarBtn");
const listaTareas = document.getElementById("listaTareas");

agregarBtn.addEventListener("click", () => {
  const texto = tareaInput.value.trim();

  if (texto === "") {
    alert("¡La tarea no puede estar vacía!");
    return;
  }

  const li = document.createElement("li");
  li.className =
    "list-group-item d-flex justify-content-between align-items-center bg-dark-subtle text-white";

  const divIzquierda = document.createElement("div");
  divIzquierda.className = "d-flex align-items-center";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "form-check-input me-3";

  const span = document.createElement("span");
  span.textContent = texto;

  divIzquierda.appendChild(checkbox);
  divIzquierda.appendChild(span);

  const divBtns = document.createElement("div");

  const btnEditar = document.createElement("button");
  btnEditar.textContent = "Editar";
  btnEditar.className = "btn btn-sm btn-warning me-2";

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.className = "btn btn-sm btn-danger";

  divBtns.appendChild(btnEditar);
  divBtns.appendChild(btnEliminar);

  li.appendChild(divIzquierda);
  li.appendChild(divBtns);

  listaTareas.appendChild(li);

  tareaInput.value = "";
  tareaInput.focus();

  // Evento para eliminar tarea
  btnEliminar.addEventListener("click", () => {
    li.remove();
  });

  // Evento para editar tarea
  btnEditar.addEventListener("click", () => {
    const nuevoTexto = prompt("Edita la tarea:", span.textContent);
    if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
      span.textContent = nuevoTexto.trim();
    }
  });

  // Evento para marcar tarea como hecha
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      span.classList.add("tarea-realizada");
    } else {
      span.classList.remove("tarea-realizada");
    }
  });
});
