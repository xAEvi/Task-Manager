import React, { useState } from 'react';
import '../stylesheets/TaskForm.css'
import { v4 as uuidv4 } from 'uuid';

const TaskForm = props => {
  
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSend = e => {
    e.preventDefault();

    // If input is not empty
    if (input.trim()) {
      const newTask = {
        id: uuidv4(),
        text: input.trim(),
        finished: false
      };
  
      props.onSubmit(newTask);
      setInput('');

    } else {
      alert("Task must not be empty")
      setInput('');
    }

  };

  return(
    <form 
      className='task-form'
      onSubmit={handleSend}>
      <input 
        className='task-input'
        type='text'
        placeholder='Type your task'
        name='Task text'
        onChange={handleChange}
        value={input}
      />
      <button 
      className='task-button'>
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;