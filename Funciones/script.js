let librosLeidos=[]
//1. Modificar la función de agregarLibro para evitar agregar duplicados.
function esLibroDuplicado(titulo) {
    return librosLeidos.some(libro => libro.toLowerCase() === titulo.toLowerCase());
}
//Función para agregar libro
function agregarLibro(titulo) {
    if (!titulo || typeof titulo !== 'string' || typeof titulo === 'function') {
        console.log('Por favor, ingresa un título válido.');
    } else if (esLibroDuplicado(titulo)) {
        console.log(`El libro "${titulo}" ya está en la lista. Por favor, ingresa otro título.`);
    } else {
        librosLeidos.push(titulo);
        console.log(`Libro "${titulo}" agregado a la lista.`);
    }
}
//Función para mostrar todas los libros
function mostrarLibrosLeidos(){
    return (librosLeidos);
}
//2. Crear una función para buscar un libro por nombre. En caso de que exista, regresar true, caso contario regresar false.
function buscarLibro(titulo){
    if (!titulo || typeof titulo !== 'string' || typeof titulo === 'function') {
        console.log('Por favor, ingresa un título válido.');
    }
    let libros = librosLeidos.find(libro =>libro.toLowerCase() === titulo.toLowerCase());
    if(!libros){
        console.log(`Libro "${titulo}" no existe en la lista.`);
    }else{
        console.log(`Libro "${titulo}" si existe en la lista.`);
    }
}
// 3. Crear una función que regrese todos los libros que empiecen con una letra en específico. Hint: startsWith()
function buscarLibrosPorInicial(letra) {
    if (!letra || typeof letra !== 'string') {
        console.log('Por favor, ingresa una letra o palabra válida.');
        return;
    }

    let inicialLibros = librosLeidos.filter(libro => libro.toLowerCase().startsWith(letra.toLowerCase()));

    if (inicialLibros.length === 0) {
        console.log(`No hay libros que comiencen con la letra "${letra}".`);
    } else {
        console.log(`Libros que comienzan con la letra "${letra}":`);
        inicialLibros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro}`);
        });
    }
}
//4. Crear una función para eliminar un libro a partir del nombre.
function eliminarLibro(titulo){
    if (!titulo || typeof titulo !== 'string') {
        console.log('Por favor, ingresa un título válido.');
        return;
    }
    let indice = librosLeidos.findIndex(libro => libro.toLowerCase() === titulo.toLowerCase());

    if (indice === -1) {
        console.log(`El libro "${titulo}" no se encontró en la lista.`);
    } else {
        librosLeidos.splice(indice, 1);
        console.log(`El libro "${titulo}" ha sido eliminado de la lista.`);
    }
}
//5. Crear una función que regrese todos los libros en orden alfabético.
function ordenAlfaLibros(){
    let orden = librosLeidos.sort();
    return orden;
 }
//6. Crear una función que muestre todos los libros en mayúsculas. Hint: toUpperCase()
function mayusculasLibros(){
   let mayus = librosLeidos.map(libro => libro.toUpperCase());
   return mayus;
}
//7. Crear una función que muestre el nombre al revés de un libro en una posición
function invertirNombre(indice){
    if (indice < 0 || indice >= librosLeidos.length) {
        console.log('Posición inválida. Por favor, elige un número entre 0 y ' + (librosLeidos.length - 1));
        return;
    }
    let libro = librosLeidos[indice];

    let libroInvertido = '';
    for (let i = libro.length - 1; i >= 0; i--) {
        libroInvertido += libro[i];
    }

    console.log(`El nombre del libro en la posición ${indice} invertido es: "${libroInvertido}"`);
}
agregarLibro('Romeo y Julieta');
agregarLibro('Hamlet');
agregarLibro('La hojarasca');
agregarLibro('Los dos hidalgo de Verona');
agregarLibro('Diario de una pasión');
agregarLibro('Posdata te amo');
agregarLibro('Orgullo y prejuicio');
agregarLibro('Cumbres Borrascosas');
agregarLibro('Nefilim');
agregarLibro('Lazos de sangre');
agregarLibro('Hielo negro');
agregarLibro('Sueño de una noche de verano');
agregarLibro('La chica del tren');
agregarLibro('Hola')
agregarLibro(123);
agregarLibro(agregarLibro);
agregarLibro('Hamlet');

console.log(mostrarLibrosLeidos());
console.log(mayusculasLibros());

buscarLibro('Hamlet');
buscarLibro('Bambi'); //No existe

buscarLibrosPorInicial('C');
buscarLibrosPorInicial('l');
buscarLibrosPorInicial('a'); //no hay

eliminarLibro('Bambi'); //no existe
eliminarLibro('hola');

console.log(mostrarLibrosLeidos());

console.log(ordenAlfaLibros());

invertirNombre(3)
invertirNombre(11)
invertirNombre(13)