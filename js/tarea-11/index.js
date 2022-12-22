/*
- Una función sin parámetros que devuelva siempre "true"

- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

- Una función generadora de índices pares automáticos
*/


//- Una función sin parámetros que devuelva siempre "true"
function sinParametro(){
    return true;
}
sinParametro()


//  - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
function promesa() {

    setTimeout(() => {
        console.log("Hola soy una promesa!");
    }, 5000);
    
}
promesa()

//- Una función generadora de índices pares automáticos
function* generaId() {
    let id = 0;
    while(true) {
        id++;
        id++;
        if (id === 50) {
            return id
        }
        yield id;
    }
}

const generador = generaId();

console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);

