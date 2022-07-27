import './App.css';
import Navbar from './Components/Navbar';
import placesData from './cardData.json';
import ContentData from './Components/ContentData';

export default function App(){
  return (
    <div className='App'>
      <Navbar placeHolder='Location' myData={placesData} myType="text"/>
      <ContentData place='Finland' amount={0} data={placesData}/>
    </div>
  );
}