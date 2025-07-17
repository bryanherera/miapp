const formulario= document.querySelector(".form-create");
let contador=0;
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    contador++;
    const descripcion = document.querySelector("#descripcion").value;
    const contenedor = document.querySelector(".publicaciones");
    contenedor.innerHTML += `<div class="publicacion">
                <p>id: ${contador}</p>
                <p contenteditable="true">${descripcion}</p>
                <button id="editar" onclick="editar(this)">Editar</button>
                <button id="eliminar" onclick= "eliminar(this)">eliminar</button>
            </div>`;
            cont++;
});


function editar (e){
    const parrafo = e.parentElement.querySelector("p:nth-child(2)");
    parrafo.contentEditable = true;
    e.value ="guardar";
    if(parrafo.contentEditable){
        parrafo.contentEditable = false;
    }
    if (e.value == "guardar"){
        e.value = "editar";
    }
}

function eliminar (e){
e.parentElement.remove();
}