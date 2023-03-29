import React from 'react'
import Avatar from "./Avatar"
import "../css/avatarStyle.css"
import "bootstrap-icons/font/bootstrap-icons.css"

const Person=({dato,active,remov})=>{

    function iconActive(param) {
        if (param.active) {
            return(<i onClick={()=>active(param)} className="bi bi-toggle2-on" style={{color: 'green'}}></i>)
        }else{
            return(<i onClick={()=>active(param)} className="bi bi-toggle2-off" style={{color: 'gray'}}></i>)
        }
    }

    function iconDelete(param) {
  //      console.log(param);
        return(<i onClick={()=>remov(param)} className="bi bi bi-trash text-danger"></i>)
    }
    

  return (
    <tr className='border-secondary border-opacity-50 contacto'>
      <td className='container-avatar'><Avatar avatar={dato.avatar}/></td>
      <td className='pt-3 text-blu-light text-name'>{dato.name}</td>
      <td className='pt-3 text-gray'>{dato.lastName}</td>
      <td className='pt-3 text-gray'>{dato.numPhone}</td>
      <td className='pt-3 text-gray col-email'>{dato.email}</td>
      <td className='pt-3 text-gray'>{iconActive(dato)}</td>
      <td className='pt-3 text-gray'>{iconDelete(dato)}</td>
    </tr>
  )
}

export default Person;
