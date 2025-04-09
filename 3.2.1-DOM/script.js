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
   nuevoLi.id='li5';
   //creando texto
   nuevoLi.innerText = agregarTareaInput.value;
   listaTareas.appendChild(nuevoLi);
   agregarTareaInput.value = "";
    document.getElementById("mensajesAplicacion").innerText = "";

    //Para eliminar un elemento usamos removeChild aplicado al papá
    let mensajeError = document.getElementById('mensajeError');
    document.body.removeChild(mensajeError);
}
function eliminarTarea(){
    let listaTareas = document.getElementById('listaTareas');
    let liTareas = listaTareas.getElementsByTagName('li');
    if(liTareas.length > 0){
        listaTareas.removeChild(liTareas[liTareas.length - 1]);
        document.getElementById("mensajesAplicacion").innerText = "Tarea eliminada"
        
}
}


