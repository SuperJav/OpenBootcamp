/*
- Una variable que contenga tu altura en centímetros (entero)

- Una variable que contenga tu altura en metros (número de coma flotante)

- Una variable que contenga tu peso en kilogramos (número de coma flotante)

- Una variable que contenga tu altura en metros redondeada hacia arriba

- Una variable que contenga tu peso en kilogramos redondeado hacia abajo

- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
*/


//- Una variable que contenga tu altura en centímetros (entero)
let altura= 157.2;
let resultado= parseInt(altura)
console.log(`Resultado de tu altura de centimetro a entero: ${resultado}`);

//- Una variable que contenga tu altura en metros (número de coma flotante)
let altura2= 1.52;
let resultado2= parseFloat(altura2)
console.log(`Resultado de altura en metro convertido a numero flotante: ${resultado2}`);

//- Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso= 157.2
let resultado3= parseFloat(peso)
console.log(`Resultado de peso en kilogramos covertido a flotante: ${resultado3}`);

//- Una variable que contenga tu altura en metros redondeada hacia arriba
let altura3= 1.52;
let resultado4= altura3.toFixed()
console.log(`Resultado de redondear la altura hacia arriba: ${resultado4}`);

//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let peso1= 157.2;
let resultado5= Math.floor(peso1);
console.log(`Resultado de redondear el kilogramos hacia abajo: ${resultado5}`);

//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let numero = Number.MAX_VALUE + 1;
let maximoValor= Number.MAX_VALUE;

if (numero > maximoValor) {
    console.log(`${numero} es el maximo valor que se puede obtener en Java script!`);  
}else{
   console.log(`${numero} no es el maximo valor que se puede obtener en Java script!`);
}

