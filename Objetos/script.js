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
    console.log(`Capítulo agregado: ${nuevoCapitulo}`);
}
//Elimina un capítulo
function eliminarCapitulo(Libro, capitulo) {
    let indice = Libro.capitulos.indexOf(capitulo);
    if (indice !== -1) {
        Libro.capitulos.splice(indice, 1);
        console.log(`Capítulo eliminado: ${capitulo}`);
    } else {
        console.log(`El capítulo "${capitulo}" no se encontró en la lista.`);
    }
}

let Libro1 = new Libro("Cumbres Borrascosas","Emily Brontë",1986,"disponible",["Capítulo 1", "Capítulo 2", "Capítulo 3"])
Libro1.describirLibro();
let Libro2 = new Libro("La sirenita","los hermanos",1962,"disponible",["Capítulo 1", "Capítulo 2", "Capítulo 3"])
Libro2.describirLibro();
let Libro3 = new Libro("Mulán","los hermanos",1952,"disponible",["Capítulo 1", "Capítulo 2", "Capítulo 3"])
Libro3.describirLibro();
agregarCapitulo(Libro1, "Capítulo 4");
eliminarCapitulo(Libro1, "Capítulo 2");
agregarCapitulo(Libro2, "Capítulo 5");
eliminarCapitulo(Libro2, "Capítulo 3");
agregarCapitulo(Libro3, "Capítulo 6");
eliminarCapitulo(Libro3, "Capítulo 1");
eliminarCapitulo(Libro3,"Capítulo 8")

