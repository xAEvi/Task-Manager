import React, { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import '../stylesheets/TasksList.css'

const TasksLists = () => {

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  const updateTaskList = updatedTasks => {
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  }

  const addTask = task => {
    const updatedTasks = [task, ...tasks];
    updateTaskList(updatedTasks);
  };

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    updateTaskList(updatedTasks);
  };

  const finishTask = id => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id){
        task.finished = !task.finished;
      }
      return task;
    });
    updateTaskList(updatedTasks);
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