import './App.css';
import React, {useState} from 'react';
import Calculator from './Components/calculator';


export default function App(){

  const [selectTheme, setSelectedTheme] = useState(1);
  
  const handleThemeFilter = (e) => {
    const theme = parseInt(e.target.value);
    setSelectedTheme(theme);
  }

  // THEME 1
  const theme1 = {
    backgroundColor: 'hsl(222, 26%, 31%)',
    transition: '1s',
  }

  const buttonStyleSelected = {
    border: 'none',
    borderRadius: '50%',
    backgroundColor: 'hsl(6, 63%, 50%)',
  }

  const backgroundTopTheme = {
    backgroundColor: 'hsl(223, 31%, 20%)',
    padding: '0.2rem',
    transition: '1s',

  }

  const titleStyleTheme1 = {
    color: 'hsl(30, 25%, 89%)',
    fontWeight: '700',
    transition: '1s',
  }

  const buttonStyleStandar = {
    border: 'none',
    backgroundColor: 'transparent',
  }

  const footerTheme1 = {
    color: 'hsl(28, 16%, 65%)',
    fontWeight: '600',
    transition: '1s',
  }

  const linkTheme1 = {
    color: 'hsl(30, 25%, 89%)',
    fontWeight: '500',
  }


  // THEME 2
  const theme2 = {
    backgroundColor: 'hsl(0, 0%, 90%)',
    transition: '1s',
  }

  const buttonStyleSelected2 = {
    border: 'none',
    borderRadius: '50%',
    backgroundColor: 'hsl(25, 98%, 40%)',
  }

  const titleStyleTheme2 = {
    color: 'hsl(60, 10%, 19%)',
    fontWeight: '700',
    transition: '1s',
  }

  const backgroundTopTheme2 = {
    backgroundColor: 'hsl(0, 5%, 81%)',
    padding: '0.2rem',
    transition: '1s',
  }

  const footerTheme2 = {
    color: 'hsl(185, 58%, 25%)',
    fontWeight: '600',
    transition: '1s',
  }

  const linkTheme2 = {
    color: 'hsl(25, 98%, 40%)',
    fontWeight: '500',
  }  

  // THEME 3

  const theme3 = {
    backgroundColor: 'hsl(268, 75%, 9%)',
    transition: '1s',
  }

  const backgroundTopTheme3 = {
    backgroundColor: 'hsl(268, 47%, 21%)',
    padding: '0.2rem',
    transition: '1s',
  }

  const buttonStyleSelected3 = {
    border: 'none',
    borderRadius: '50%',
    backgroundColor: 'hsl(177, 92%, 70%)',
  }

  const titleStyleTheme3 = {
    color: 'hsl(52, 100%, 62%)',
    fontWeight: '700',
    transition: '1s',
  }

  const footerTheme3 = {
    color: 'hsl(52, 100%, 62%)',
    fontWeight: '600',
    transition: '1s',
  }

  const linkTheme3 = {
    color: 'hsl(176, 100%, 44%)',
    fontWeight: '500',
  }
  
  return (
    <div className='App row container-fluid justify-content-center align-items-center' style={selectTheme === 1 ? theme1 : selectTheme === 2 ? theme2 : theme3}>
      <div className='AppRootContent col-lg-4 col-md-8 col-12'>
        <div className='headerContent justify-content-center row container-fluid align-items-center'>
          <div className='col-md-8 col-5 mt-5'>
            <h1 style={selectTheme === 1 ? titleStyleTheme1 : selectTheme === 2 ? titleStyleTheme2 : titleStyleTheme3} className='title'>Calc</h1>
          </div>
          <div className='themeButtonsDiv col-md-4 col-6 gap-3 row container-fluid'>
            <div className='p-0 col-4 align-items-end d-flex'>
              <h3 className='titleTheme' style={selectTheme === 1 ? titleStyleTheme1 : selectTheme === 2 ? titleStyleTheme2 : titleStyleTheme3}>THEME</h3>
            </div>
            <div className='col-md-8 col-8 row container-fluid'>
              <div className='buttonDiv col-4 p-0'>
                <p style={selectTheme === 1 ? titleStyleTheme1 : selectTheme === 2 ? titleStyleTheme2 : titleStyleTheme3}>1</p>
                <div style={selectTheme === 1 ? backgroundTopTheme : selectTheme === 2 ? backgroundTopTheme2 : backgroundTopTheme3} className='backgroundButton' id='bck1'>
                  <button className='buttonTheme' id='buttonTheme' value={selectTheme ? 1 : 1} style={selectTheme === 1 ? buttonStyleSelected : buttonStyleStandar} onClick={handleThemeFilter}></button>
                </div>
              </div>
              <div className='buttonDiv col-4 p-0'>

                <p style={selectTheme === 1 ? titleStyleTheme1 : selectTheme === 2 ? titleStyleTheme2 : titleStyleTheme3}>2</p>
                <div style={selectTheme === 1 ? backgroundTopTheme : selectTheme === 2 ? backgroundTopTheme2 : backgroundTopTheme3} className='backgroundButton'>
                  <button className='buttonTheme' value={selectTheme ? 2 : 2} style={selectTheme === 2 ? buttonStyleSelected2 : buttonStyleStandar} onClick={handleThemeFilter}></button>
                </div>
                
              </div>
              <div className='buttonDiv col-4 p-0'>
                <p style={selectTheme === 1 ? titleStyleTheme1 : selectTheme === 2 ? titleStyleTheme2 : titleStyleTheme3}>3</p>
                <div style={selectTheme === 1 ? backgroundTopTheme : selectTheme === 2 ? backgroundTopTheme2 : backgroundTopTheme3} className='backgroundButton ' id='bck3'>
                  <button className='buttonTheme' value={selectTheme ? 3 : 3} style={selectTheme === 3 ? buttonStyleSelected3 : buttonStyleStandar} onClick={handleThemeFilter}></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='calculatorDiv'>
          <Calculator theme={selectTheme}/>
        </div>
        <div className='footer'>
          <footer style={selectTheme === 1 ? footerTheme1 : selectTheme === 2 ? footerTheme2 : footerTheme3}>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer' style={selectTheme === 1 ? linkTheme1 : selectTheme === 2 ? linkTheme2 : linkTheme3}>Frontend Mentor</a>. Coded by <a href="https://vicentejorquera.netlify.app" rel='noreferrer' style={selectTheme === 1 ? linkTheme1: selectTheme === 2 ? linkTheme2 : linkTheme3}>Vicente Jorquera</a>.
          </footer>
        </div>
      </div>
    </div>
  );
}