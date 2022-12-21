/*
- La fecha de hoy

- La fecha de tu nacimiento

- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

- Una variable que contenga el día de tu nacimiento

- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
*/


//- La fecha de hoy
let fechaActual=new Date().toLocaleDateString();
console.log(fechaActual);

//- La fecha de tu nacimiento
let fechaNacimiento= new Date(2000,05,24);
console.log(fechaNacimiento);

//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let fechaNacimiento2= new Date(2000,05,24);
let fechaActual2=new Date();

if (fechaActual2> fechaNacimiento2) {
    console.log("Es mas tarde que mi fecha de nacimiento.");
}else{
    console.log("Es mas temprano, que mi fecha de nacimiento.");
}

//- Una variable que contenga el día de tu nacimiento
let fechaNacimiento3= new Date(2000,05,24);
let dia=fechaNacimiento2.getDate();
console.log(dia);


//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let fechaNacimiento4= new Date(2000,05,24);
let mes=fechaNacimiento4.getMonth()
console.log(mes);

//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let fechaNacimiento5= new Date(2000,05,24);
let anye=fechaNacimiento5.getFullYear();
console.log(anye);


