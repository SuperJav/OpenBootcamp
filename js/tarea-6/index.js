/*
- Una variable que contenga la lista de la compra (mínimo 5 elementos)

- Modifica la lista de la compra y añádele "Aceite de Girasol"

- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
*/


//- Una variable que contenga la lista de la compra (mínimo 5 elementos)
let listaCompras= ["Leche","Huevos","Miel","Pan","Chocolate"];
console.log(listaCompras);

//- Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompras.push("Aceite de Girasol");
console.log(listaCompras);


//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompras.pop();
console.log(listaCompras);

//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let peliculasFavoritas=[
    {
        titulo:"Rapido y furioso",
        director:"Jose Angel",
        fecha:new Date("1999-2-28"),
    },
    {
        titulo:"Car 2",
        director:"Carlos Arturo",
        fecha:new Date("2005-8-02"),
    },
    {
        titulo:"Iron Man (Original)",
        director:"Daniel perez",
        fecha:new Date("2017-5-10"),
    }
];
console.log(peliculasFavoritas.map(index=>index));


//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
let fechaEstablecidad=new Date("2010-1-01");
let resultado= peliculasFavoritas.filter(index=>index.fecha >= fechaEstablecidad)
console.log("Resultado de peliculas:");
console.log(resultado);

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
peliculasFavoritas.map(index=>{
    if (index.titulo.search("Original") != -1) {
         console.log(`Pelicula original: ${index.titulo}`);
    };
});

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
let newList=peliculasFavoritas.map(index=>{
    return index.director.concat(" ",index.titulo)
})
console.log(newList);

