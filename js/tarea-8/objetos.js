/*
- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
*/


//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
let objectoDato={
    nombre:"Javielito",
    apellido:"Ramirez Brioso",
    altura:157.2,
    eresDesarrollador:true,
    edad:22
};

//- Una variable que obtenga tu edad a partir del objeto anterior
let miEdad=22;


//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
let listaInformacion=[
    objectoDato,
    {
        nombre:"Anderson",
        apellido:"paniagua Perez",
        altura:167.0,
        eresDesarrollador:false,
        edad:15
    },
    {
        nombre:"Carlo",
        apellido:"Rodriguez Luna",
        altura:134.5,
        eresDesarrollador:true,
        edad:27
    }
]

//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
let newList;
listaInformacion.sort((a,b)=> b.edad-a.edad)
newList=listaInformacion;
console.log(newList);




