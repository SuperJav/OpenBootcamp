import React from 'react'
import { LEVELS } from '../../models/levels.enum'
import {Taks} from "../../models/taks.class"
import TaskComponent from '../pure/task.jsx'
const TaskListComponent=()=>{

    const defaultTask = new Taks("Example","Default description",false,LEVELS.NORMAL)

    const changeState=(id)=>{
        console.log("TODO: cambiar estado de una tarea");
        
    }
  return (
    <div>
      <div>
            <h1>Your tasks:</h1>
      </div>
      {/*TODO: Aplicar un For o Map, para denderizar una lista */}
      <TaskComponent task={defaultTask}/>
    </div>
  )
}

export default TaskListComponent

