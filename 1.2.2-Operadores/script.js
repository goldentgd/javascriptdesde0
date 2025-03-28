//alert("Hola");

//asignación -> = <-
let valorA = 5;
let valorB = 4;

valorA = 9;
//concatenación -> + <-
//matemáticos
console.log(valorA + " + " + valorB + " = " + (valorA + valorB))
console.log(valorA + " - " + valorB + " = " + (valorA - valorB))
console.log(valorA + " * " + valorB + " = " + (valorA * valorB))
console.log(valorA + " / " + valorB + " = " + (valorA / valorB))

//módulo %
console.log(valorA + " % " + valorB + " = " + (valorA % valorB))

//combinados
let variable1 = 10;
console.log(variable1);
variable1 += 5;
console.log(variable1);
variable1 -= 7;
console.log(variable1);
variable1 *=2;
console.log(variable1);

//incremento y decremento
let variable2 = 0;
console.log(variable2);
variable2++;
console.log(variable2);
variable2++;

//Incremento
let variable3= 5;
console.log(variable3);
variable3--;
console.log(variable3);

//comparacion
console.log("5 == 5 -->" + (5 == 5));
console.log("5 == '5' -->" + (5 == '5'));
console.log("5 === '5' -->" + (5 === '5'));

console.log("18 != 17 -->" + (18 != 17));
console.log("18 != '18' -->" + (18 != '18'));
console.log("18 !== '18' -->" + (18 !== '18'));

let varMayor = 24;
let varMenor = -1;
console.log(varMayor + " > " + varMenor + " --> " + (varMayor > varMenor));
console.log(varMayor + " < " + varMenor + " --> " + (varMayor < varMenor));

let varIgual = 24;
console.log(varMayor + " >= " + varIgual + " --> " + (varMayor >= varIgual));
console.log(varMayor + " <= " + varIgual + " --> " + (varMayor <= varIgual));

//and &&
//t && t = t
//t && f = f
//f && t = f
//f && f = f
let edad = 24;
let traeINE = true;
console.log("edad >=18 &&  traeINE = true -->" + (edad >= 18 && traeINE));
traeINE = false;
console.log("edad >=18 &&  traeINE = false -->" + (edad >= 18 && traeINE));
//or ||
//t || t = t
//t || f = t
//f || t = t
//f || f = f
let especieMascota = "perro";
console.log("especieMascota: " + especieMascota);
console.log("especieMascota == 'perro' || especieMascota == 'gato' -> ", (especieMascota == 'perro' || especieMascota == 'gato'));

especieMascota = "gato";
console.log("especieMascota: " + especieMascota);
console.log("especieMascota == 'perro' || especieMascota == 'gato' -> ", (especieMascota == 'perro' || especieMascota == 'gato'));

especieMascota = "conejo";
console.log("especieMascota: " + especieMascota);
console.log("especieMascota == 'perro' || especieMascota == 'gato' -> ", (especieMascota == 'perro' || especieMascota == 'gato'));


// Not (negación) -> !
/*
    !true  -> false
    !false -> true
*/

console.log("!true -> " + !true);
console.log("!false -> " + !false);

edad = 35;
console.log("!(edad >= 18) -> " + (!(edad >= 18)));

// Tarea: Investigsr la O exclusiva XOR
/* */