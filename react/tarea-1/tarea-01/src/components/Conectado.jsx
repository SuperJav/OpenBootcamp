import PropTypes from "prop-types"
import React from 'react'

 const Conectado=({conect})=> {
    
  return (
    <div>
      <h3>
      {
        conect?<span className="conect-greed">Contacto En Línea</span> :<span className="conect-red">Contacto No Disponible</span>
      }
      </h3>
    </div>
  )
}
Conectado.propTypes = {
    conect:PropTypes.bool,
}

export default Conectado; 