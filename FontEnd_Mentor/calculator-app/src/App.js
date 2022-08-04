import './App.css';
import React, {useState} from 'react';
import Calculator from './Components/calculator';


export default function App(){

  const [selectTheme, setSelectedTheme] = useState(1);
  
  const handleThemeFilter = (e) => {
    const theme = parseInt(e.target.value);
    setSelectedTheme(theme);
  }

  const theme1 = {
    color: 'hsl(0, 0, 90%)',
    backgroundColor: 'hsl(222, 26%, 31%)',
    transition: '1s',
  }

  const theme2 = {
    color: 'hsl(60, 10%, 19%)',
    backgroundColor: 'hsl(0, 0%, 90%)',
    transition: '1s',
  }

  const theme3 = {
    color: 'hsl(0, 0, 100%)',
    backgroundColor: 'hsl(268, 75%, 9%)',
    transition: '1s',
  }

  const buttonStyleStandar = {
    height: '2rem',
    width: '2rem',
    border: 'none',
    borderRadius: '50%',
    backgroundColor: 'transparent',
  }

  const buttonStyleSelected = {
    height: '2rem',
    width: '2rem',
    border: 'none',
    borderRadius: '50%',
    backgroundColor: 'orange',
  }

  const backgroundTopTheme = {
    backgroundColor: 'hsl(223, 31%, 20%)',
    fontSize: '0.2rem',
    padding: '0.6rem'
  }

  const titleStyleTheme1 = {
    color: 'hsl(30, 25%, 89%)',
    fontWeight: '700'
  }

  
  return (
    <div className='App row container-fluid justify-content-center align-items-center' style={selectTheme === 1 ? theme1 : selectTheme === 2 ? theme2 : theme3}>
      <div className='AppRootContent col-lg-4 col-md-6 col-11'>
        <div className='headerContent row container-fluid align-items-center'>
          <div className='col-8 mt-5'>
            <h1 style={titleStyleTheme1} className='title'>Calc</h1>
          </div>
          <div className='themeButtonsDiv col-4 row container-fluid'>
            <div className='buttonDiv col-4 p-0'>
              <p>1</p>
              <div style={backgroundTopTheme} className='backgroundButton' id='bck1'><button className='buttonTheme' value={selectTheme ? 1 : 1} style={selectTheme === 1 ? buttonStyleSelected : buttonStyleStandar} onClick={handleThemeFilter}></button></div>
            </div>
            <div className='buttonDiv col-4 p-0'>

              <p>2</p>
              <div style={backgroundTopTheme}className='backgroundButton'>
                <button className='buttonTheme' value={selectTheme ? 2 : 2} style={selectTheme === 2 ? buttonStyleSelected : buttonStyleStandar} onClick={handleThemeFilter}></button>
              </div>
              
            </div>
            <div className='buttonDiv col-4 p-0'>
              <p>3</p>
              <div style={backgroundTopTheme}className='backgroundButton ' id='bck3'>
                <button className='buttonTheme' value={selectTheme ? 3 : 3} style={selectTheme === 3 ? buttonStyleSelected : buttonStyleStandar} onClick={handleThemeFilter}></button>
              </div>
            </div>
          </div>
        </div>
        <div className='calculatorDiv'>
          <Calculator theme={selectTheme}/>
        </div>
      </div>
    </div>
  );
}