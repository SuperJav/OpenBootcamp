import React from 'react'
import avatar1 from "../imgs/avatar (1).png"
import avatar2 from "../imgs/avatar (2).png"
import avatar3 from "../imgs/avatar (3).png"
import avatar4 from "../imgs/avatar (4).png"
import avatar5 from "../imgs/avatar (5).png"
import avatar6 from "../imgs/avatar (6).png"
import avatar7 from "../imgs/avatar (7).png"
import avatar8 from "../imgs/avatar (8).png"
import avatar9 from "../imgs/avatar (9).png"
import avatar10 from "../imgs/avatar (10).png"


const Avatar=({avatar})=>{

    const avatars=[avatar1, avatar2,avatar3,avatar4,avatar5,avatar6,avatar7,avatar8,avatar9,avatar10]

    function selectAvatar(avatar) {
      
        return(
                <img src={avatars[avatar]} alt="avatar"/>
        )
    }
  return (
    <div>
        {
            selectAvatar(avatar) 
        }
    </div>
  )
}

export default Avatar