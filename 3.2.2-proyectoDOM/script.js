let botonAgregar = document.getElementById('agregarComentarioBtn');
let agregarComentarioInput = document.getElementById('agregarComentarioInput');
let listaComentarios = document.getElementById('listaComentarios');
botonAgregar.addEventListener('click', agregarComentario);

function agregarComentario(){
   if(agregarComentarioInput.value === ""){
      document.getElementById("mensajesAplicacion").innerText = "El campo de Comentario está vacío. Por favor agrega una Comentario"
      return;
   }
   let nuevoLi = document.createElement('li'); 
   nuevoLi.innerText = agregarComentarioInput.value;
   listaComentarios.appendChild(nuevoLi);
   agregarComentarioInput.value = "";
    document.getElementById("mensajesAplicacion").innerText = "";

    let FechaHora = document.createElement('div');
    FechaHora.innerText = new Date().toLocaleString();
    FechaHora.classList.add('comentario-fecha');

    nuevoLi.appendChild(FechaHora);
    nuevoLi.appendChild(botonEliminar);

    agregarComentarioInput.value = "";
    mensajeApp.innerText = "";
}
