import React,{useState} from 'react'

const Ejemplo1=()=>{

    //Valor inicial para un contador  
    const valorInicial=0;

    //Valor inicial para una persona
    const personaInicial={
        nombre: "Martin",
        email:  "martin@imaginagroup.com"
    }
    const [contador,setContador]=useState(valorInicial)
    const [persona,setPersona]=useState(personaInicial)

    const incrementarContador=()=>{
        setContador(contador + 1)
    }

    const actualizarPersona=()=>{
        setPersona(
            {
                nombre:"pepe",
                email:"pepe@imaginagroup.com"
            }
        )
    }


  return (
    <div>
      <h1>*** Ejemplo de useState() ***</h1>
      <h2>COTADOR: {contador}</h2>
      <h2>DATO DE PERSONA:</h2>
      <h3>Nombre:{persona.nombre}</h3>
      <h3>Email: {persona.email}</h3>

      <button onClick={incrementarContador}>Incrementar contador</button>
      <button onClick={actualizarPersona}>Actualizar persona</button>
    </div>
  )
}

export default Ejemplo1
