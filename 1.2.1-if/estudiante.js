let nota=65;

if (nota >= 90){
    console.log("Excelente");
} else if (nota >= 75 && nota <= 89){
    console.log("Bien")
}else if (nota >= 60 && nota <= 74){
    console.log("Suficiente")
}else{
    console.log("El estudiante No aprueba")
}

let postre = "galletas";
let bebida = "agua";

if(postre === "gelatina"){
    console.log("Estoy en el hospital comiendo " + postre);
}else if(postre === "pastel"){
    console.log("Estoy en un cumpleaños comiendo " + postre);
}else if(postre ==="helado"){
    console.log("Hace mucho calor por eso me compré un " + postre);
}else if(postre === "frutas" && bebida === "agua"){
    console.log("Estoy a dieta con " + postre + " y " + bebida);
}else if(postre === "galletas" || bebida === "café"){
    console.log("Estoy en un funeral con " + postre + " y " + bebida);
}else if(postre === "lechuga" || bebida === "agua de limón"){
    console.log("Soy vegetariana")
}else{
    console.log("No hay postre para mí :(")
}