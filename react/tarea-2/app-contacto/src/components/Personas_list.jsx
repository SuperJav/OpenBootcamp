import React,{useState,useEffect} from 'react'
import { Persona } from '../models/persona.class'
import Person from "./Person"
//import Form from './form/Form'

 const Persons=({activaction,sedDato})=> {
   
    const persona1= new Persona(1,"Carlo","Hernadez Paniagua","829-345-4333","Carlo123@hotmail.com",true);
    const persona2= new Persona(2,"Onguito","Mendoza Perez","829-222-1233","onguito123@hotmail.com",false);
    const persona3= new Persona(4,"Hanna","Santana Ramos","809-224-201","Hanna05@gmail.com",true);
    const persona4= new Persona(6,"Jose","Ramoz perez","829-345-4333","Jose123@hotmail.com",true);
    const persona5= new Persona(8,"pablo","Hugo manzanillo","829-221-1233","pablo123@hotmail.com",false);
    const persona6= new Persona(9,"Heidy","Santana Ramos","809-224-5675","Heidy05@gmail.com",true);
    const listPerson=[persona1,persona2,persona3,persona4,persona5,persona6]
    const [persona, setPersona] = useState(listPerson)
    
    useEffect(()=>{
        NewContact(activaction,sedDato)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[sedDato])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function NewContact(activaction,param2) {

            if (activaction=== "active") {
                    let newPerson=param2
                    listPerson.push(newPerson)
                            let array= [...persona,newPerson]
                            setPersona(array)
            }
    }


   
    // Challeger of state contacto of active or deactivate
    function activeContacto(index){
        const onlyPerson=persona.indexOf(index)
        const personArrays=[...persona]
        personArrays[onlyPerson].active= !personArrays[onlyPerson].active
        setPersona(personArrays)
    }

    // Delete person
    function deleteperson(index) {
        const onlyPerson=persona.indexOf(index)
        let personArrays=[]
        persona.map((dato,index)=>{return index !== onlyPerson? personArrays.push(dato):false})
        setPersona(personArrays)
    }
    function tableHeader() {
        return(
            <thead>
                    <tr className="table-title text-title text-uppercase">
                        <th></th>
                        <th scope="col">Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Phone</th>
                        <th className='col-email' scope="col">Email</th>
                        <th scope="col">Active</th>
                        <th scope='col'>Delete</th>
                    </tr>
                </thead>
        )
    }
    function isThereContact() {
        
        if (persona.length !== 0) {
            return(
                <>
                    {tableHeader()}
                    
                    <tbody>
                        {
                            persona.map((dato,index)=> <Person key={index} dato={dato} active={activeContacto} remov={deleteperson}/>)
                        }
                    </tbody>
                    
                </>
                )
        }else{
            return(<h1 className=' text-center fst-italic text-secondary'>No hay contactos agregado</h1>)
        }
        
    }


  return (
    <div>
        <div className='align-items-center'>
            <h4 className='mb-3 text-blu-light text-center py-4 text-sm-center text-md-center text-lg-start'><i className="bi bi-person-lines-fill"></i> Contacts  list</h4>
            <div>

            <table className='table text-white'>
                    {isThereContact()}        
            </table> 
            </div>
        </div>
    </div>
  )
}

export default Persons; 