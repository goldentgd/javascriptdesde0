console.log('Hello, world!');
//strings: '', "", ``
//variables: var, let, const, espacio en la computadora que guarda datos
//especificador de variable + nombre de la variable = valor
let nombre = "Sergio"; //declarar variable nombre
console.log(nombre); //imprimir variable nombre
nombre = "Adriana";
console.log(nombre);
const pi = 3.1416;
console.log(pi);
//pi = 10; no se puede reasignar una constante
//number: representa números
let edad= 26;
let grados = -20;
//Concatenacion
let mensajeFinal = nombre + " tiene " + edad + " años."
console.log(mensajeFinal);
let esMayorDeEdad = true;
let esUnaPersonaMayor = false;
alert(mensajeFinal); //ventana emergente

let nombreMascota = prompt("Escribe el nombre de tu mascota");

let estatura = prompt("Escribe la estatura de la mascota");
let enferma = true;
alert("El nombre de la mascota es " + nombreMascota + "\nLa estatura de la mascota es " + estatura);
if (enferma = true){
    alert("La mascota está enferma");
}else{
    alert("La mascota no está enferma");
}



let pregunta1 = "1. Nombre Completo"; //Nombre completo
let respuesta1 = prompt("Escribe tu nombre completo:")
let pregunta2 = "2. Edad"; //edad del usuario
let respuesta2 = prompt("Escribe tu edad:")
let pregunta3 = "3. ¿Qué animal tiene dos patas?"; //Pato
let respcorr3 = "Pato";
let opciones = "1. Pato\n2. Gato\n3. Perro\nEscribe el número correcto";
let respuesta3 = prompt(pregunta3 + "\n" + opciones);

if (respuesta3 == "Pato") {
    alert("Correcto, el Pato tiene dos patas.");
} else {
    alert("Incorrecto, la respuesta correcta es Pato.");
}
let pregunta4 = "4. ¿Qué animal tiene cuatro patas?"; //Gato
let opciones2 = "1. Pato\n2. Gato\n3. Ganzo \nEscribe el número correcto";
let respuesta4 = prompt(pregunta4 + "\n" + opciones2);
let respcorr4 = "Gato";
if (respuesta4 == "Gato") {
    alert("Correcto, el Gato tiene cuatro patas.");
} else {
    alert("Incorrecto, la respuesta correcta es Gato.");
}
let pregunta5 = "5.¿Cuál es la capital de Francia?";
let resp5 = prompt("¿Cuál es la capital de Francia?"); // París
let respcorr5 = "París";
let pregunta6 = "6. ¿Cuál es la capital de Alemania?";
let resp6 = prompt("¿Cuál es la capital de Alemania?"); // Berlín
let respcorr6 = "Berlín";
let pregunta7 = "7. ¿Cuál es la capital de Italia?";
let resp7 = prompt("¿Cuál es la capital de Italia?"); // Roma
let respcorr7 = "Roma";
let pregunta8 = "8. ¿Cuál es la capital de España?";
let resp8 = prompt("¿Cuál es la capital de España?"); // Madrid
let respcorr8 = "Madrid";
let pregunta9 = "9. ¿Cuál es la capital de Portugal?";
let resp9 = prompt("¿Cuál es la capital de Portugal?"); // Lisboa
let respcorr9 = "Lisboa";
let pregunta10 = "10. ¿Cuánto mide 1 metro en cm?";
let resp10 = prompt("¿Cuánto mide 1 metro en cm?"); // 100 cm
let respcorr10 = "100 cm";
let cuestionario = pregunta1 + "\n" + respuesta1 + "\n" + pregunta2 + "\n" + respuesta2 + 
"\n" + pregunta3 + "\n" + respuesta3 + "\n" + pregunta4 + "\n" + respuesta4 +
"\n" + pregunta5 + "\n" + resp5 + "\n" + pregunta6 + "\n" + resp6 + "\n" + pregunta7 + "\n" + resp7 +
"\n" + pregunta8 + "\n" + resp8 + "\n" + pregunta9 + "\n" + resp9 + "\n" + pregunta10 + "\n" + resp10;
console.log(cuestionario);



