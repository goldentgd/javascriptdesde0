
//let contador = 2;

// Array de frutas 

let frutas = ['manzana', 'plátano', 'naranja']; 

// Array de números 

let numeros = [1, 2, 3, 4, 5]; 

// Array vacío 

let vacio = [];
let colores = ['rojo', 'verde', 'azul', 'amarillo'];
console.log(colores[1]); // Imprime: verde
colores[2] = 'naranja';
//Number(prompt("texto"))

//while -> estructura de control que nos permite repetir instrucciones
let contador = 1;
while(contador<=10){
    console.log(contador)
    contador++;
}
//contador = 10
//el código en el do siempre se va a ejecutar por lo menos 1 vez, parecido al while
do{
    console.log("Soy el código de un do-while")
}while(contador < 10);

//for
for(let i=0, j= 0;i<=20, j<=10;i+=2, j+=2){
    console.log(i,j);
}
let nombre=["Adriana","Alexis","Luis","Fer"];
//typeof permite saber el tipo de dato o variable
//let nombre = Array(5); arreglo con 5 posiciones
console.log(nombre[2])
nombre[1] = "Alberto"
//[-1] no podemos poner números negativos en arrays
//push, pop, unshift, shift, map, sort
let fruta =[];
fruta.push("Limón");
console.log(fruta);
fruta.unshift("Pera");
fruta.push("jamón");
fruta.unshift("cebolla");
console.log(fruta);
fruta.pop(); //Eliminar el último elemento de un arreglo
console.log(fruta);
fruta.shift(); //Eliminar el primer elemento de un arreglo
console.log(fruta);
//splice agrega un dato o elimina en medio
fruta.splice(1,1,"Fresa","Mango");
console.log(fruta);
//slice devuelve una copia y accede a más de un elemento
console.log(fruta.slice(1,3));
let numerosPares = [1,3,4,6,7,8,9,2,11,15,67,90];
numerosPares.length; //Cuántos valores hay en el array.
let pares = [];
let impares = [];
for(let i=0; i < numerosPares.length;i++){
    if(numerosPares[i]%2 == 0){
        console.log(numerosPares[i] + " es Par");
        pares.push(numerosPares[i])
    }else{
        console.log(numerosPares[i] + " es Impar");
        impares.push(numerosPares[i]);
    }
}
console.log(pares)
console.log(impares)
