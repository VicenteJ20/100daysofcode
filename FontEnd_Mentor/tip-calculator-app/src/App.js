import './App.css';
import BillCard from './Components/Bill_Card';
import './ComponentsStyle/Bill_Card.css'

export default function App(){
  return (
    <div className='App'>
      <div className='important_content'>
        <h1 className='title_App'>SPLI<br></br>TTER</h1>
        <BillCard />
      </div>
      <div className="attribution">
        <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'>Frontend Mentor</a>. 
        Coded by <a href="https://vicentejorquera.netlify.app">Vicente Jorquera</a>.</p>
      </div>
    </div>
  );
}