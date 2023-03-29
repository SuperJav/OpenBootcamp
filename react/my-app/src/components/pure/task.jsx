import React,{useEffect} from 'react'
import PropTypes from 'prop-types'
import { Taks } from '../../models/taks.class'
import "../../style/task.scss"
import { LEVELS } from '../../models/levels.enum'

const TaskComponent=({task, complete, remove })=>{

  useEffect(() => {
    console.log('Tarea Creada');
  
    return () => {
      console.log(`Task: ${task.name} is going to unmount`);
    }
  }, [task])

  function taskLevelBadge(){

    switch (task.leved) {
      case LEVELS.NORMAL:
        return(
          <h6 className='mb-0'>
            <span className="badge bg-primary">
              {task.leved}
            </span>
          </h6>
        );

      case LEVELS.URGENT:
          return(
            <h6 className='mb-0'>
              <span className="badge bg-warning">
                {task.leved}
              </span>
            </h6>
          );
      case LEVELS.BLOCKING:
          return(
            <h6 className='mb-0'>
              <span className="badge bg-danger">
                {task.leved}
              </span>
            </h6>
          );

    
      default:
        break;
    }
  }

  function taskCompletedIcon(){
    
    if (task.completed) {
      return(<i onClick={()=>complete(task)} className='bi-toggle-on task-action' style={{color:"green"}}></i>)
    }else{
      return(<i onClick={()=>complete(task)} className='bi-toggle-off task-action' style={{color:'gray'}}></i>)
    }
  }
  

  return (
    <tr className='fw-normal'>
        <th>
          <span className='ms-2'>{task.name}</span>
        </th>
        <td className='align-middle'>
          <span className='ms-2'>{task.description}</span>
        </td>
        <td className='align-middle'>
          {taskLevelBadge()}
        </td>
        <td className='align-middle'>
            {taskCompletedIcon()}
            <i className='bi-trash task-action' onClick={()=>remove(task)} style={{color:"tomato"}}></i>
        </td>
    </tr>
  )
}

TaskComponent.propTypes = {
    task:PropTypes.instanceOf(Taks).isRequired,
    complete:PropTypes.func.isRequired,
    remove:PropTypes.func.isRequired
}

export default TaskComponent
