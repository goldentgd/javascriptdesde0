let frutasConTipo = [
    { nombre: "Naranja", tipo: "Cítrico" },
    { nombre: "Manzana", tipo: "Pomácea" },
    { nombre: "Plátano", tipo: "Tropical" },
    { nombre: "Uva", tipo: "Baya" },
    { nombre: "Fresa", tipo: "Baya" },
    { nombre: "Piña", tipo: "Tropical" },
    { nombre: "Mango", tipo: "Tropical" },
    { nombre: "Cereza", tipo: "Drupa" },
    { nombre: "Pera", tipo: "Pomácea" },
    { nombre: "Sandía", tipo: "Cucurbitácea" },
    { nombre: "Melón", tipo: "Cucurbitácea" },
    { nombre: "Durazno", tipo: "Drupa" },
    { nombre: "Coco", tipo: "Drupa" },
    { nombre: "Kiwi", tipo: "Baya" },
    { nombre: "Limón", tipo: "Cítrico" }
];


let citricos = 0;
let pomaceas = 0;
let tropicales = 0;
let drupas = 0;
let cucurbitaceas = 0;

let i = 0;

while (i < frutasConTipo.length) {
    let tipo = frutasConTipo[i].tipo;

     if (tipo === "Cítrico") {
        citricos++;
    } else if (tipo === "Pomácea") {
        pomaceas++;
    } else if (tipo === "Tropical") {
        tropicales++;
    } else if (tipo === "Drupa") {
        drupas++;
    } else if (tipo === "Cucurbitácea") {
        cucurbitaceas++;
    }

    i++;
}

console.log("Resultados con ciclo WHILE:");
console.log("Cítricos:", citricos);
console.log("Pomáceas:", pomaceas);
console.log("Tropicales:", tropicales);
console.log("Drupas:", drupas);
console.log("Cucurbitáceas:", cucurbitaceas);

//CON UN FOR
let contTiposFruta = {}
for (let i = 0; i < frutasConTipo.length; i++) {
    let tipo = frutasConTipo[i].tipo;

    if (contTiposFruta[tipo]) {
        contTiposFruta[tipo]++;
    } else {

        contTiposFruta[tipo] = 1;
    }
}

console.log("Resultado con ciclo FOR:", contTiposFruta);