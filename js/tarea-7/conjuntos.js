/*
- Un nuevo Set con los nombres de tu familia

- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
*/


//- Un nuevo Set con los nombres de tu familia
let familia= ["Pablo","Jazmin","Rosa","Hanna","Jachi","Javielito"]
let set_familia= new Set(familia)
console.log(set_familia);

//- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
set_familia.add("Javielito")
console.log(set_familia);

//- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
set_familia.add("Javascript")
console.log(set_familia);
