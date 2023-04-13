import React from 'react';
import '../stylesheets/Task.css'
import { AiFillCloseCircle } from 'react-icons/ai';

const Task = ({ id, text, finished, finishTask, deleteTask }) => {
  return(
    <div className={finished ? 'task-container finished' : 'task-container'}>
      <div 
        className='task-text'
        onClick={() => finishTask(id)}>
        {text}
      </div>
      <div 
        className='task-icons-container'
        onClick={() => deleteTask(id)}>
        <AiFillCloseCircle className='task-icon'/>
      </div>
    </div>    
  );
}

export default Task;