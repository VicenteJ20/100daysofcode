import './App.css';
import Navbar from './Components/Navbar';
import placesData from './cardData.json';

export default function App(){
  return (
    <div className='App'>
      <Navbar placeHolder='Location' myData={placesData}/>
    </div>
  );
}