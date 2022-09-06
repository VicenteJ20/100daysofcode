import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/containers/task_list';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt="logo" />
        {/* Componente propio Greeting.jsx */}
{/*         
        <Greeting name="Vicente"/>
        <FunctionGreeting name="Vicente"/> */}

        {/*Componente listado de tareas*/}
        <TaskListComponent />
      </header>
    </div>
  );
}

export default App;