const formulario = document.querySelector(".form-create");
let contador = 0;

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    contador++;
    const descripcion = document.querySelector("#descripcion").value;
    const contenedor = document.querySelector(".publicaciones");
    contenedor.innerHTML += `<div class="publicacion">
                <p>id: ${contador}</p>
                <p contenteditable="true">${descripcion}</p>
                <button class="editar" onclick="editar(this)">Editar</button>
                <button class="eliminar" onclick="eliminar(this)">Eliminar</button>
            </div>`;
});

function editar(e) {
    const parrafo = e.parentElement.querySelector("p:nth-child(2)");
    if (e.textContent == "Editar") {
        parrafo.contentEditable = true;
        e.textContent = "Guardar";
        parrafo.focus();
    } else {
        e.textContent = "Editar";
        parrafo.contentEditable = false;
    }
}

function eliminar(e) {
    e.parentElement.remove();
}
