let numero=10; //numero ingresado por el usuario

let resultado=0; // variable para almacenar el resultado total

let element=10;

for (let index = 1; index <= numero; index++) {
    element = element * index;
    console.log(element);
    resultado=element;
}

console.log(`Resultado: ${resultado}`);
