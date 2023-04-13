import './App.css';
import logo from './images/task.png';

function App() {
  return (
    <div className="App">
      <div className='logo-container'>
        <h1>Task Manager</h1>
        <img
          className='logo'
          src={logo}
          alt='Task Manager logo' />
      </div>
    </div>
  );
}

export default App;
