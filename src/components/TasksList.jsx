import React, { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import '../stylesheets/TasksList.css'

const TasksLists = () => {

  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    setTasks([task, ...tasks]);
  }

  return (
    <>
      <TaskForm onSubmit={addTask}/>
      <div className='tasks-list-container'>
        {
          tasks.map((task) => 
            <Task 
              key={task.id}
              id={task.id}
              text={task.text}
              finished={task.finished}
            />
          )
        }
      </div>
    </>
  );
};

export default TasksLists;