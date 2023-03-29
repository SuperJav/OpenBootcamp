import React,{useState} from 'react'
import iconAgregarFoto from "../../imgs/icon-agregar-contact.png"
import "../../css/formStyle.css"
import Modal from './Modal'
import Persons from '../Personas_list'
import { Persona } from '../../models/persona.class'


const Form=()=>{
    
    const [dato,setDato]=useState()
    const [active,setActive]=useState("inactive")
       
    //function for select Avactar
    function selectAvatar() {
       let modal=document.getElementById("Modal")
        modal.showModal()     
    } 

    function receviData() {
        //receive the data
        document.querySelector("form")
            .addEventListener("submit", e =>{
                e.preventDefault()
        const Data = Object.fromEntries(
            new FormData(e.target)
            
        )
            if (Data.name !== "") {
                let personaForm= new Persona(SelectAvactar(),Data.name,Data.lastName,Data.phone,Data.email,conditionPerson(Data.availability))
            console.log(personaForm);
            setDato(personaForm)
            setActive("active")
            
            }else{
            }
            document.querySelector("form").reset()
        })
        
    }
    
    //Busca el avatar selecionado despues que el formulario se envia
    function SelectAvactar() {
        let avatarIndex=document.getElementById("icon-add-contact")
   //     console.log(avatarIndex.alt);
        return avatarIndex.alt
    }
    function conditionPerson(availability) {
       return availability? true: false
    }
 
    
  return (
    <div className='container-table container text-white p-sm-1 p-md-1 p-5'>   
        <Persons activaction={active} sedDato={dato}/>
        <hr  className='bg-black border border-dark mt-5'/>
        <form className='row col-12 p-sm-0 m-sm-0 p-md-2 p-lg-2'>
            <div className='p-5 p-sm-5 p-md-0 d-flex d-sm-flex d-md-block conten-avatar col-12 col-sm-12 col-md-4 col-lg-3'>
                <div className=' text-center col-6 col-sm-6 col-md-8    col-lg-12 mb-4' onClick={selectAvatar}>
                    <img id="icon-add-contact" src={iconAgregarFoto} alt="icon-add-contact"/>
                    <br />
                    <span>Select a profile</span>
                    
                </div>
                <div className=' col-6 col-sm-12 col-md-4 col-md-5 col-lg-4'>
                    <fieldset className='contenedor m-3 mx-sm-0 my-sm-0   '>
                        <legend className='contenedor'>Condition</legend>
                        <div className='form-check '>
                            <label className='form-check-label' htmlFor="contact-asset">Asset</label>
                            <input className="form-check-input" type="radio" name="availability" id="contact-asset" value="asset" />
                        </div>
                        <div className='form-check'>
                                <label className='form-check-label' htmlFor="contact-inactive">Inactive</label>
                                <input className="form-check-input" type="radio" name="availability" id="contact-inactive" defaultChecked value="inactive"/>
                        </div>
                    </fieldset> 
                </div>
                <Modal/>
            </div>

            <div className='row ps-5 ps-md-0  col-12 col-sm-12 col-md-8 col-lg-9'>
            <div className='contenedor col-6 col-sm-6 col-md-6 col-lg-5 mt-3 '>
                <label className='form-label' htmlFor="name">Name</label>
                <input className='form-control place' type="text" name="name" id="name" placeholder='Carlo' required/>
            </div>
            <div className='contenedor col-6 col-sm-6 col-md-6 col-lg-5 mt-3 '>
                <label className='form-label' htmlFor="lastName">Last Name</label>
                <input className='form-control place' type="text" name="lastName" id="lastName" placeholder='Elian Perez' required/>
            </div>
            
            <div className='contenedor col-6 col-sm-6 col-md-6 col-lg-5 mt-3 '>
                <label className='form-label' htmlFor="phone">Phone</label>
                <input className='form-control place' type="tel" name="phone" id="phone" placeholder='XXX-XXX-XXX' required/>
            </div>
            <div className='contenedor col-6 col-sm-6 col-md-6 col-lg-5 mt-3 '>
            <label className='form-label' htmlFor="email">Email</label>
            <input className='form-control place' type="email" name="email" id="email" placeholder='Example@compani.com' required/>
            </div>

            </div>

            <div className='col-12  text-center mt-3'>
                <button className='btn btn-success col-3' type="submit" onClick={()=>receviData()} >Add</button>
            </div>
          
        </form>
    </div>
  )
}

export default Form;