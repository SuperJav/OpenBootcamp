import React,{useState,useContext} from 'react'

    const miContexto=React.createContext(null)

const Componente1=()=> {

    const state=useContext(miContexto);

  return (
    <div>
        <h1>El Token es: {state.token}</h1>
        <Componente2/>
    </div>
  )
}

const Componente2=()=> {

    const state=useContext(miContexto);

    return (
      <div>
        <h2>
            La sesion es:{state.sesion}
        </h2>
      </div>
    )
  }

  export default function MiConponenteConContexto() {

    const estadoInicial={
        token:"1234567",
        sesion:1
    }

    const [sesionData, setSessionData] = useState(estadoInicial)

    function actualizarSesion() {
        setSessionData(
            {
                token: "1244KlJDSW333D",
                sesion: sesionData.sesion + 1
            }
        );
    }

    return(
        <miContexto.Provider value={sesionData}>
             
            <Componente1/>
            <button onClick={actualizarSesion}>Actualizar Sesion</button>
        </miContexto.Provider>
    )
    
  }
  
