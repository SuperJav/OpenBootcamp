import React,{useEffect,useRef,useState} from 'react'


 const Ejemplo2 = (props) => {

    const [contador1,setContador1]=useState(0);
    const [contador2,setContador2]=useState(0);

    const miRef= useRef();

    function incrementar1() {
        setContador1(contador1+1)
    }
    function incrementar2() {
        setContador2(contador2+1)
    }

    // useEffect(()=>{
    //     console.log("Cambio en el estado del componente");
    //     console.log("Mostrando referencia al elmento del DOM");
    //     console.log(miRef);
    // })
    // useEffect(()=>{
    //     console.log("Cambio en el estado del componente");
    //     console.log("Mostrando referencia al elmento del DOM");
    //     console.log(miRef);
    // },[contador1])
    useEffect(()=>{
        console.log("Cambio en el estado del componente");
        console.log("Mostrando referencia al elmento del DOM");
        console.log(miRef);
    },[contador1,contador2])
  return (
    <div>
        <h1>*** Ejemplo de useState() ***</h1>
        <h2>CONTADOR 1: {contador1}</h2>
        <h2>CONTADOR 2: {contador2}</h2>
        <h4 ref={miRef}>
            Ejemplo del elemento referenciado
        </h4>
        <div>
            <button onClick={incrementar1}>Incrementar contador 1</button>
            <button onClick={incrementar2}>Incrementar contador 2   </button>

        </div>
    </div>
  )
}

export default Ejemplo2

