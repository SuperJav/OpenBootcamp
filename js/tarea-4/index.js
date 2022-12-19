/*
Crea un archivo JS que contenga las siguientes líneas

- Una cadena de texto con tu Nombre

- Otra cadena de texto con tu Apellido

- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

- Una variable que contenga la primera letra del Nombre

- Otra variable que contenga la última letra del Apellido

- Una cadena de texto que elimine los espacios de la variable "estudiante"

- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
*/


//- Una cadena de texto con tu Nombre
//- Otra cadena de texto con tu Apellido
let Nombre= "Javielito";
let Apellido="Ramirez Brioso";
let Grado= "Estudiante";

//- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let concatenacion= Grado.concat(" ",Nombre," ",Apellido)
console.log(concatenacion);

//- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus="estudianteMayus";
console.log(estudianteMayus.toUpperCase());

//- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus="estudianteMinus";
console.log(estudianteMayus.toLowerCase());

//- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let estudiante="estudiante";
console.log(estudiante.length);


//- Una variable que contenga la primera letra del Nombre
console.log(Nombre.charAt(0));

//- Otra variable que contenga la última letra del Apellido
console.log(Apellido.slice(-1));

//- Una cadena de texto que elimine los espacios de la variable "estudiante"
console.log(estudiante.trim());


//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let existeNombre= estudiante.includes("javielito")
console.log(existeNombre);








