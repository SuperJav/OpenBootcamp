import React from 'react'
import avatar1 from "../../imgs/avatar (1).png"
import avatar2 from "../../imgs/avatar (2).png"
import avatar3 from "../../imgs/avatar (3).png"
import avatar4 from "../../imgs/avatar (4).png"
import avatar5 from "../../imgs/avatar (5).png"
import avatar6 from "../../imgs/avatar (6).png"
import avatar7 from "../../imgs/avatar (7).png"
import avatar8 from "../../imgs/avatar (8).png"
import avatar9 from "../../imgs/avatar (9).png"
import avatar10 from "../../imgs/avatar (10).png"


const avatars=[avatar1, avatar2,avatar3,avatar4,avatar5,avatar6,avatar7,avatar8,avatar9,avatar10]

export default function Modal() {

    function closeModal(){
        let modal=document.getElementById("Modal")
        modal.close()
    } 
    function select(params) {
      let img_profile= document.getElementById("icon-add-contact")
      img_profile.src=avatars[params.target.alt] 
      img_profile.alt=params.target.alt
    }

  return (
    <div>
        <dialog id='Modal'>
            <div>
            <h4>Select a profile</h4>
            <div div>
                { 
                    avatars.map((dato,index)=><img className='select-avatar' key={index} src={dato} alt={index} onClick={(e)=>select(e)}></img>)
                }
            </div>
            <button id='buttoCloseModal' onClick={closeModal}>Close</button>
            </div>
        </dialog>
    </div>
    
  )
}
