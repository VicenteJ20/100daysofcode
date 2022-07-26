import './App.css';
import Navbar from './Components/Navbar';
import BookData from './Data.json'

export default function App(){
  return (
    <div className='App'>
      <Navbar placeHolder="Enter a place..." myData={BookData}/>
    </div>
  );
}