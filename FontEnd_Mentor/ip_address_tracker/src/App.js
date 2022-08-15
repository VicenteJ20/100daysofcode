/* eslint-disable no-undef */
import React, {useState} from 'react';
import './App.css';
import MapComponet from './Components/Map';
import PanelData from './Components/PanelData';

export default function App(){

  const [myData, setMyData] = useState('');

  const [getValue, setValue] = useState('');

  const handleInfoInput = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  }

  const handleDataFilter = () => {
    let ipAddress = getValue;
    fetch('https://geo.ipify.org/api/v1?apiKey=at_1AValOl1Iud26jRnNyefeTgPAnAfh&ipAddress=' + ipAddress)
    .then(response => response.json())
    .then(data => setMyData(data))
  }
  return (
    
    <div className='AppRoot'>
      <header className='headerApp'>
        <h1 className='titleApp'>IP Address Tracker</h1>
        <label htmlFor="inputText"></label>
        <div className='inputDIV row'>
          <input type='text' value={getValue} onChange={handleInfoInput} className='col-10' id='inputIP' placeholder="Search for any IP Address"></input>
          <button className='searchButton col-2' onClick={handleDataFilter}><i className="fa-solid fa-angle-right"></i></button>
        </div>
      </header>
      <div className='divComponentBar' id='componentBar'>
      <PanelData ip={myData.length !== 0 ? myData.ip : ''}  location={myData.length !== 0 ? myData.location.region + ', ' + myData.location.city + ', ' + myData.location.country : ''} timezone={myData.length !== 0 ? myData.location.timezone : ''} isp={myData.length !== 0 ? myData.isp : ''}/> 
      </div>
      {
        myData.length !== 0 ?
        <MapComponet lat={myData.location.lat} lon={myData.location.lng} city={myData.location.city}/>
        : <div className='newButton'>
            {myData.length === 0 ? handleDataFilter() : ''}
          </div>
      }
    </div>
  );
}