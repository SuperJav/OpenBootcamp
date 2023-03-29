import React,{useState} from 'react'

const loginForm=()=> {

    const initialCredentials=[{
        user:"",
        password:""
    }]

    const [credentials, setCredentials] = useState(initialCredentials)
    
  return (
    <div>loginForm</div>
  )
}
