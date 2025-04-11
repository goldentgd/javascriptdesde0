//document.getElementById(): Selecciona un elemento por su ID.
let titulo = document.getElementById('miTitulo');

//document.getElementsByClassName(): Selecciona todos los elementos que tengan una clase específica.
let clase = document.getElementsByClassName('miClase');
//document.getElementsByTagName(): Selecciona todos los elementos de un tipo específico (por ejemplo, todos los <p>).
let parrafos = document.getElementsByTagName('p');
//document.querySelector(): Selecciona el primer elemento que coincide con un selector CSS.
let primerParrafo = document.querySelector('p');
//document.querySelectorAll(): Selecciona todos los elementos que coinciden con un selector CSS.
let todosLosParrafos = document.querySelectorAll('p');

let title = document.getElementById('titulo');
let parrafo = document.getElementById('firstParrafo');
let boton = document.getElementById('button');

boton.addEventListener('click',function(){
title.innerHTML = "¡Contenido actualizado!"
parrafo.innerHTML = "El contenido ha sido cambiado"
});

let parrafoOculto = document.getElementById('parrafoOculto');
let btnShow = document.getElementById('buttonHide');
btnShow.addEventListener('click', function(){
 if(parrafoOculto.style.display === 'none'){
    parrafoOculto.style.display = 'block';
    btnShow.textContent = 'Ocultar contenido';
 }else{
    parrafoOculto.style.display = 'none';
    btnShow.textContent = 'Mostrar contenido';
 }   
});
function Saludar(){
    alert('Hola, bienvenido a mi sitio web!');
}
agregarTareaInput.value //permite acceder a lo que esta escrito en el input
let botonAgregar = document.getElementById('agregarTareaBtn');
//botonAgregar.onclick=agregarTarea;
botonAgregar.addEventListener('click', agregarTarea);

function agregarTarea(){
   //accediendo a input
   let agregarTareaInput = document.getElementById('agregarTareaInput');
   if(agregarTareaInput.value === ""){
      document.getElementById("mensajesAplicacion").innerText = "El campo de tarea está vacío. Por favor agrega una tarea"
      return;
   }
   //Accediendo a ul
   let listaTareas = document.getElementById('listaTareas');
   //creando nuevo elemento
   let nuevoLi = document.createElement('li'); 

   let parrafoNuevo = document.createElement("p");
    parrafoNuevo.innerText = agregarTareaInput.value; // El atributo value me permite acceder a lo que está escrito en el input.
    nuevoLi.appendChild(parrafoNuevo);

    // Crear un botón nuevo
    let botonEliminar = document.createElement("button");
    botonEliminar.innerText = "Eliminar";

    botonEliminar.addEventListener("click", () => {
        //listaTareasUl.removeChild(nuevoLi); // removeChild() elimina un hijo de un elemento padre.
        nuevoLi.remove(); // remove() se elimina asimismo.
    });

    parrafoNuevo.appendChild(botonEliminar);
   //creando texto
   //nuevoLi.innerText = agregarTareaInput.value;
   listaTareas.appendChild(nuevoLi);
   agregarTareaInput.value = "";
    document.getElementById("mensajesAplicacion").innerText = "";

    //Para eliminar un elemento usamos removeChild aplicado al papá
    let mensajeError = document.getElementById('mensajeError');
    document.body.removeChild(mensajeError);
    let mensajeErrorH2 = document.getElementById("mensajeError");
    document.body.removeChild(mensajeErrorH2); // En este caso el elemento que quiero borrar es hijo del body.
    // document.body es un atajo para acceder al elemento <body>
}

let agregarTareaBtn = document.getElementById("agregarTareaBtn"); // Buscando un elemento por su id.
//agregarTareaBtn.onclick = agregarTarea; // Modificando la propiedad de un evento para agregarle una función.
agregarTareaBtn.addEventListener("click", agregarTarea); 

let funcionSuma = (a,b) => { 
   return a + b;
}

function subtituloYParrafo(subtitulo, texto){
   let nuevoDiv = document.createElement("div");
   /*
   nuevoDiv.innerHTML = "<h2>" + subtitulo + "</h2>" +
                        "<p>" + texto + "</p>";
   */

   nuevoDiv.innerHTML = `<h2> ${subtitulo} </h2>` + 
                        `<p> ${texto} </p>`;

   return nuevoDiv;

   //let pPrueba = document.querySelector("#prueba > p"); // querySelector nos permite buscar un elemento a través de selectores de css.
   //pPrueba.innerHTML = "<b>Modificando el texto del párrafo</b>";
}

// Template string -> Es una manera de crear una cadena compuesta de constantes (texto) y expresiones de JS.
/*
   ` <- backticks <- alt + 96 
           altgr + } (dos veces)
           ctrl + alt + tecla }
*/



document.body.appendChild(subtituloYParrafo("Título 1", "Este es un texto de prueba"));
document.body.appendChild(subtituloYParrafo("Título 2", "Este es un texto de prueba 2"));
document.body.appendChild(subtituloYParrafo("Título 3", "Este es un texto de prueba 3"));
document.body.appendChild(subtituloYParrafo("Título 4", "Este es un texto de prueba 4"));
document.body.appendChild(subtituloYParrafo("Título 5", "Este es un texto de prueba 5"));
document.body.appendChild(subtituloYParrafo("Título 6", "Este es un texto de prueba 7"));