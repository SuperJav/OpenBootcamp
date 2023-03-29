import React from 'react'
import  PropTypes from 'prop-types'
import { useRef } from 'react'
import { LEVELS } from '../../../models/levels.enum'
import { Taks } from '../../../models/taks.class'

const TaskForm=({add})=>{

  const nameRef=useRef("")
  const descriptionRef=useRef("")
  const levelRef=useRef(LEVELS.NORMAL)


  function addTask(e) {
    e.preventDefault();
    const newTask=new Taks(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    )
    add(newTask)
    
  }
  return (
    <form onSubmit={addTask} className="d-flex justify-content-center align-items-center mb-4">
      <div className='form-outline flex-fill'>
        <input type="text" ref={nameRef} id="inputName" className='form-control form-control-lg' required autoFocus placeholder='Task name'/>
        <input type="text" ref={descriptionRef} id="inputDescription" className='form-control form-control-lg' required placeholder='Task description'/>
        <label htmlFor="selectLevel" className='sr-only'>Priority</label>
        <select ref={levelRef} defaultValue={LEVELS.NORMAL} id="selectLevel">
          <option value={LEVELS.NORMAL}>Normal</option>
          <option value={LEVELS.URGENT}>Urgent</option>
          <option value={LEVELS.BLOCKING}>Blocking</option>
        </select>
      </div>
      <button type="submit" className='btn btn-success btn-lg ms-3'>Add</button>
    </form>
  )
}

TaskForm.prototype={
  add:PropTypes.func.isRequired,


}
export default TaskForm;


