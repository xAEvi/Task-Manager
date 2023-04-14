import React, { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import '../stylesheets/TasksList.css'

const TasksLists = () => {

  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    setTasks([task, ...tasks]);
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const finishTask = id => {
    setTasks(tasks.map(task => {
      if (task.id === id){
        task.finished = !task.finished;
      }
      return task;
    }));
  };

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
              deleteTask={deleteTask}
              finishTask={finishTask}
            />
          )
        }
      </div>
    </>
  );
};

export default TasksLists;