/* eslint-disable no-undef */
import React, {useState} from 'react';
import './App.css';
import PanelData from './Components/PanelData';


export default function App(){

  const [myData, setMyData] = useState('');

  function getInfoInput(){
    let input = document.getElementById('inputIP');
    return input.value;
  }

  const handleDataFilter = () => {
    let ipAddress = getInfoInput();
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
          <input type='text' className='col-10' id='inputIP' placeholder="Search for any IP Address"></input>
          <button className='searchButton col-2' onClick={handleDataFilter}><i className="fa-solid fa-angle-right"></i></button>
        </div>
      </header>
      <div className='divComponentBar'>
      <PanelData ip={myData.length !== 0 ? myData.ip : ''}  location={myData.length !== 0 ? myData.location.region + ', ' + myData.location.city + ', ' + myData.location.country : ''} timezone={myData.length !== 0 ? myData.location.timezone : ''} isp={myData.length !== 0 ? myData.isp : ''}/> 
      </div> 
    </div>
  );
}