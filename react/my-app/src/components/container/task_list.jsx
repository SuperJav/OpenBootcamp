import React,{useState,useEffect} from 'react'
import { LEVELS } from '../../models/levels.enum'
import {Taks} from "../../models/taks.class"
import TaskForm from '../pure/forms/taskForm'
import TaskComponent from '../pure/task.jsx'
const TaskListComponent=()=>{

    const defaultTask1 = new Taks("Example1","Description 1",true,LEVELS.NORMAL)
    const defaultTask2 = new Taks("Example2","Description 2",false,LEVELS.URGENT)
    const defaultTask3 = new Taks("Example3","Description 3",false,LEVELS.BLOCKING)

    const [tasks, setTasks] = useState([defaultTask1,defaultTask2,defaultTask3])
    const [loanding, setLoanding] = useState(true)

    useEffect(() => {
      console.log("Modificacion de tarea");
      setLoanding(false)
      return () => {
        console.log("Cuando se desapareca el componente");
      }
    }, [tasks])
    
    function completeTask(task) {
      console.log("Complete this thask:  ", task);
      const index=tasks.indexOf(task);
      const tempTasks=[...tasks]
      tempTasks[index].completed= !tempTasks[index].completed
      setTasks(tempTasks)
    }
    function deleteTask(task) {
      console.log("Complete this thask:  ", task);
      const index=tasks.indexOf(task);
      const tempTasks=[...tasks]
      tempTasks.splice(index,1)
      setTasks(tempTasks)
    }
    function addTaks(task) {
      console.log("Complete this thask:  ", task);
      const index=tasks.indexOf(task);
      const tempTasks=[...tasks]
      tempTasks.push(task)
      setTasks(tempTasks);

    }

  return (
    <div>
      <div className='col-12'>
        <div className='card'>
            <div className='card-header p-3'>
                <h5>Your tasks:</h5>
            </div>
            <div className='card-body' data-mdb-perfect-scrollbar="true" style={{position:'relative',height:"400px"}}>
              <table>
                <thead>
                  <tr>
                    <th scope='col'>Title</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Priority</th>
                    <th scope='col'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/*TODO:  iterar sobre una lista de tareas*/}
                  {tasks.map((task,index)=>(
                    <TaskComponent 
                          key={index} 
                          task={task} 
                          complete={completeTask} 
                          remove={deleteTask}/>))}
                </tbody>
              </table>
            </div>
        </div>
      </div>
      <TaskForm add={addTaks}/>
    </div>
  )
}

export default TaskListComponent

