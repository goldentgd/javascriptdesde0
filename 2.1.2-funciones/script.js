/*
Funciones, bloque de código con un nombre

dunction <nombrefuncion>{
//Código asociado
}
*/
function saludo(){
    console.log('Hola, soy una función')
}

saludo();
/*
function<nombre>(parametros){
}
*/
function saludarPersona(nombrePersona){
    console.log('Hola ' + nombrePersona)
}
saludarPersona('María');
saludarPersona('Pedro');
let nombre1 = "Andrea";
saludarPersona(nombre1);
/*return significa regresar, calcular una salida 
cuando se ejecuta un return 
undefined si no hay un return
*/

function suma(a,b){
    //console.log(a + b);
    return a + b;
}
suma(3,4);
console.log(suma(5,4));
let resultadoSuma = suma(7,7);
console.log(resultadoSuma);
console.log(suma(resultadoSuma,6));

function sumarValoresArreglo(arreglo){
    if(arreglo.length > 1){
        console.log('no tienes mas valores')
    }else if(arreglo.length == 1){
        return arreglo[0];
    }else{
        return 0;
    }
    return arreglo[0] + arreglo[1];
}
let pares1 = [2,4,6,8]
console.log(sumarValoresArreglo(pares1));

let pares2 = [8];
console.log(sumarValoresArreglo(pares2)); //NaN -> NotANumber -> El valor no es un número
 let pares3 = [];
 console.log(sumarValoresArreglo(pares3));
//FUNCIONES ANIDADAS
 function sumarRestarMultiplicar (a,b){
    function sumar(a,b){
        return a+b;
    }
    function restar(a,b){
        return b-a;
    }
    function multiplicar(a,b){
        return a*b;
    }
    return sumar(a,b) + restar(a,b) + multiplicar(a,b);
 }


 console.log(sumarRestarMultiplicar(9,2));
 //SCOPE
 //Alcance de funciones
 