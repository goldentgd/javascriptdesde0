function Libro(titulo, autor,anio,estado,capitulos){
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.estado = estado;
    this.capitulos = capitulos;
    this.describirLibro = function (){
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    }
}
//Agrega un capítulo
function agregarCapitulo(Libro, nuevoCapitulo) {
    Libro.capitulos.push(nuevoCapitulo);
    console.log(`Capítulo agregado: ${nuevoCapitulo} al libro ${Libro.titulo}`);
}
//Elimina un capítulo
function eliminarCapitulo(Libro, capitulo) {
    let indice = Libro.capitulos.indexOf(capitulo);
    if (indice !== -1) {
        Libro.capitulos.splice(indice, 1);
        console.log(`Capítulo eliminado: ${capitulo} del libro ${Libro.titulo}`);
    } else {
        console.log(`El capítulo "${capitulo}" no se encontró en la lista.`);
    }
}
//Varios libros
let Libro1 = new Libro("Cumbres Borrascosas","Emily Brontë",1986,"disponible",["Capítulo 1", "Capítulo 2", "Capítulo 3"])
let Libro2 = new Libro("La Sirenita", "Los Hermanos Grimm", 1962, "disponible", ["Capítulo 1", "Capítulo 2", "Capítulo 3"]);
let Libro3 = new Libro("1984", "George Orwell", 1949, "disponible", ["Capítulo 1", "Capítulo 2", "Capítulo 3"]);
let libro4 = new Libro("Rebelión en la Granja", "George Orwell", 1945, "disponible", ["Capítulo 1", "Capítulo 2", "Capítulo 3"]);
let libro5 = new Libro("Homenaje a Cataluña", "George Orwell", 1938, "disponible", ["Capítulo 1", "Capítulo 2", "Capítulo 3"]);
let libro6 = new Libro("El camino a Wigan Pier", "George Orwell", 1937, "disponible", ["Capítulo 1", "Capítulo 2", "Capítulo 3"]);
Libro1.describirLibro();
Libro2.describirLibro();
Libro3.describirLibro();
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
agregarCapitulo(Libro1, "Capítulo 4");
eliminarCapitulo(Libro1, "Capítulo 2");
agregarCapitulo(Libro2, "Capítulo 5");
eliminarCapitulo(Libro2, "Capítulo 3");
agregarCapitulo(Libro3, "Capítulo 6");
eliminarCapitulo(Libro3, "Capítulo 1");
eliminarCapitulo(Libro3,"Capítulo 8")

/*
    Ejercicios complementarios:

    Fácil
    - Crear un objeto llamado ListaLibros que permita almacenar dentro de él más de un Libro.
    - Agregar un método a ListaLibros para agregar un nuevo libro.
    - Agregar un método a ListaLibros para verificar si hay un libro a partir de un nombre especificado.

    Medio
    - Agregar un método a ListaLibros que regrese un arreglo de libros que contenga todos los libros de un autor en específico.
    - Crear un método que permita mostrar todos los libros en una ListaLibros.

    Difícil
    - Agregar un método a ListaLibros para eliminar un libro a partir de su nombre.

*/
function ListaLibros(){
    this.libros = [];
    this.agregarLibro = function(libro) {
        this.libros.push(libro);
        console.log(`Libro agregado: ${libro.titulo}`);
    };
    this.existeLibro = function(nombre) {
        return this.libros.some(libro => libro.titulo === nombre);
    };
    
    this.obtenerLibrosPorAutor = function(autor) {
        return this.libros.filter(libro => libro.autor === autor);
    };
    this.mostrarLibros = function() {
        console.log("Lista de libros:");
        this.libros.forEach(libro => console.log(libro.titulo));
    };
    
    this.eliminarLibro = function(nombre) {
        const indice = this.libros.findIndex(libro => libro.titulo === nombre);
        if (indice !== -1) {
            this.libros.splice(indice, 1);
            console.log(`Libro eliminado: ${nombre}`);
        } else {
            console.log(`El libro "${nombre}" no se encontró en la lista.`);
        }
    };
}
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
let listaLibros = new ListaLibros();
listaLibros.agregarLibro(Libro1);
listaLibros.agregarLibro(Libro2);
listaLibros.agregarLibro(Libro3);
listaLibros.agregarLibro(libro4);
listaLibros.agregarLibro(libro5);
listaLibros.agregarLibro(libro6);

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
listaLibros.mostrarLibros();
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log(listaLibros.existeLibro("Mulán")); 
console.log(listaLibros.existeLibro("La Sirenita"));
console.log(listaLibros.existeLibro("El principito"));
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.table(listaLibros.obtenerLibrosPorAutor("George Orwell"));
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// Eliminar un libro
listaLibros.eliminarLibro("1984");
listaLibros.mostrarLibros();

