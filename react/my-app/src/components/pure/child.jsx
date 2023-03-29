import React from 'react'

const Child=()=>{

   function pressButton(){
        alert(`Default Text`)
    }
    function pressButtonParams(text){
        alert(`Text: ${text}`)
    }
  return (

    <div>
        <p onMouseDown={()=>console.log("On Mouse Over")}>Child Component</p>

        <button onClick={()=>{
            console.log('Boton 1');
        }}>Boton 1</button>

        <button onClick={pressButton}>Boton 2</button>

        <button onClick={()=>pressButtonParams("hola")}>Boton 3</button>
    </div>

  )
}

export default Child;