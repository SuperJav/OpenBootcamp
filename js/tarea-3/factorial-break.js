let numero=10; //numero ingresado por el usuario

let resultado=0; // variable para almacenar el resultado total

let element=10;
let index = 1;

while ( index <= numero) {
    element = element * index;
    console.log(element);
    resultado=element;
    index++
    if (resultado === 36288000) {
        console.log(`Resultado: ${resultado}`);
        break;
    }
}
