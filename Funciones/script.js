let librosLeidos=[]
function agregarLibro(titulo) {
    if (!titulo || typeof titulo !== 'string' || typeof titulo === 'function') {
        console.log('Por favor, ingresa un título válido.');
    } else {
        librosLeidos.push(titulo);
        console.log(`Libro "${titulo}" agregado a la lista.`);
    }
}
function mostrarLibrosLeidos(){
    return (librosLeidos);
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
agregarLibro(123);
agregarLibro(agregarLibro);

console.log(mostrarLibrosLeidos());