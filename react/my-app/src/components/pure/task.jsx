import React from 'react'
import PropTypes from 'prop-types'
import { Taks } from '../../models/taks.class'

const TaskComponent=({task})=>{

  return (
    <div>
        <h2>Nombre: {task.name}</h2>
        <h3>Descripcion: {task.description}</h3>
        <h4>Level: {task.leved}</h4>
        <h5>This taks is: {task.completed?"COMPLETED":"PENDING "}</h5>
    </div>
  )
}

TaskComponent.propTypes = {
    task:PropTypes.instanceOf(Taks)
}

export default TaskComponent
