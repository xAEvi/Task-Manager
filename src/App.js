import './App.css';
import logo from './images/task.png';
import Title from './components/Title'
import TasksLists from './components/TasksList';

function App() {
  return (
    <div className="App">
      <Title 
        text='Task Manager'
        logo={logo}
      /> 
      <div className='tasks-container'>
        <h1 className='list-title'>My tasks</h1>
        <TasksLists />
      </div>
    </div>
  );
}

export default App;
