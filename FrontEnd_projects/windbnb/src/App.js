import './App.css';
import Navbar from './Components/Navbar';
import allData from './cardData.json';

export default function App(){
  return (
    <div className='App'>
      <Navbar data={allData}/>
    </div>
  );
}