/*

        - Una clase llamada "Estudiante" que tenga:

        - Una variable llamada nombre

        - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS

        - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas

        - Crea una nueva instancia de "Estudiante"

        - Haz la llamada al método obtenDatos

 */

class Estudiante {
    nombre="Javielito"
    lista=[ "Javascript", "HTML", "CSS"]

    obtenDatos(){
        let objecto={
            nombre:this.nombre,
            lista:this.lista
        }
        return  objecto;
    }
}

let estudiante1= new Estudiante;

console.log(estudiante1.obtenDatos());
