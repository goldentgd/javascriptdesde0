let botonAgregar = document.getElementById('agregarComentarioBtn');
let agregarComentarioInput = document.getElementById('agregarComentarioInput');
let listaComentarios = document.getElementById('listaComentarios');

function agregarComentario(){
   if(agregarComentarioInput.value === ""){
      document.getElementById("mensajesAplicacion").innerText = "El campo de Comentario está vacío. Por favor agrega una Comentario"
      return;
   }

   let nuevoLi = document.createElement('li'); 

   let parrafoNuevo = document.createElement("p");
   parrafoNuevo.innerText = agregarComentarioInput.value;
   nuevoLi.appendChild(parrafoNuevo);
   let FechaHora = document.createElement('div');
   FechaHora.innerText = new Date().toLocaleString();
   FechaHora.classList.add('comentario-fecha');

   nuevoLi.appendChild(FechaHora);
   // Crear un botón nuevo
   let botonEliminar = document.createElement("button");
   botonEliminar.innerText = "Eliminar";
   botonEliminar.classList.add('comentario-eliminar');

   botonEliminar.addEventListener("click", () => {
       nuevoLi.remove(); 
   });

   parrafoNuevo.appendChild(botonEliminar);

   listaComentarios.appendChild(nuevoLi);

   agregarComentarioInput.value = "";
    document.getElementById("mensajesAplicacion").innerText = "";

    let mensajeErrorH2 = document.getElementById("mensajeError");
    document.body.removeChild(mensajeErrorH2);

   }


   botonAgregar.addEventListener("click", agregarComentario); 

