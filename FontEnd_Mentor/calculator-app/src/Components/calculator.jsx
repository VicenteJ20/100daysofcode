import React,{useState} from 'react';
import '../ComponentsStyle/Calculator.css';

export default function Calculator({theme}){

    /* eslint no-eval: 0 */

    const [number, setNumber] = useState('');

    const buttonsTheme1Background = {
        backgroundColor: 'hsl(223, 31%, 20%)',
        transition: '1s',
    }

    const displayTheme1 = {
        backgroundColor: 'hsl(224, 36%, 15%)',
        transition: '1s',
    }

    const buttonTheme1 = {
        boxShadow: '0 0.5rem 0 0 hsl(0, 5%, 81%)',
        transition: '0.5s',
        backgroundColor: 'hsl(0, 0%, 90%)',
    }

    const delTheme1 = {
        boxShadow: '0 0.5rem 0 0 hsl(224, 28%, 35%)',
        transition: '0.5s',
        backgroundColor: 'hsl(225, 21%, 49%)',
        color: 'hsl(30, 25%, 89%)',
        textTransform: 'uppercase',
    }

    const equalButtonTheme1 = {
        boxShadow: '0 0.5rem 0 0 hsl(6, 70%, 34%)',
        transition: '0.5s',
        backgroundColor: 'hsl(6, 63%, 50%)',
        color: 'hsl(30, 25%, 89%)',
        fontSize: '3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '0.7rem'
      }

    
      //THEME 2
    
    const displayTheme2 = {
        backgroundColor: 'hsl(0, 0%, 93%)',
        transition: '1s',
        color: 'hsl(60, 10%, 19%)',
    }

    const buttonsTheme2Background = {
        backgroundColor: 'hsl(0, 5%, 81%)',
        transition: '1s',
    }

    const delTheme2 = {
        boxShadow: '0 0.5rem 0 0 hsl(185, 58%, 25%)',
        transition: '0.5s',
        backgroundColor: 'hsl(185, 42%, 37%)',
        color: 'hsl(45, 7%, 89%)',
        textTransform: 'uppercase',
    }

    const buttonTheme2 = {
        boxShadow: '0 0.5rem 0 0 hsl(35, 11%, 61%)',
        transition: '0.5s',
        backgroundColor: 'hsl(45, 7%, 89%)',
    }

    const equalButtonTheme2 = {
        boxShadow: '0 0.5rem 0 0 hsl(25, 99%, 27%)',
        transition: '0.5s',
        backgroundColor: 'hsl(25, 98%, 40%)',
        color: 'hsl(45, 7%, 89%)',
        fontSize: '3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '0.7rem'
      }

      // Theme 3
      const displayTheme3 = {
        backgroundColor: 'hsl(268, 71%, 12%)',
        color: 'hsl(52, 100%, 62%)',
        transition: '1s',
    }

    const buttonsTheme3Background = {
        backgroundColor: 'hsl(268, 71%, 12%)',
        transition: '1s',
    }

    const delTheme3 = {
        boxShadow: '0 0.5rem 0 0 hsl(285, 91%, 52%)',
        transition: '0.5s',
        backgroundColor: 'hsl(290, 70%, 36%)',
        color: 'hsl(45, 7%, 89%)',
        textTransform: 'uppercase',
    }

    const buttonTheme3 = {
        color: 'hsl(52, 100%, 62%)',
        boxShadow: '0 0.5rem 0 0 hsl(290, 70%, 36%)',
        transition: '0.5s',
        backgroundColor: 'hsl(268, 47%, 21%)',
    }

    const equalButtonTheme3 = {
        boxShadow: '0 0.5rem 0 0 hsl(176, 100%, 44%)',
        transition: '0.5s',
        backgroundColor: 'hsl(177, 92%, 70%)',
        color: 'hsl(268, 47%, 21%)',
        fontSize: '3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '0.7rem'
      }


    return (
        <div  className="CalculatorRoot container-fluid mt-5">
            <div style={theme === 1 ? displayTheme1 : theme === 2 ? displayTheme2 : displayTheme3} className='rootDisplay row container-fluid p-4'>
                {number}
            </div>
            <div style={theme === 1 ? buttonsTheme1Background : theme === 2 ? buttonsTheme2Background : buttonsTheme3Background} className='buttonDivCalc row container-fluid'>
                <button style={theme === 1 ? buttonTheme1 : theme === 2 ? buttonTheme2 : buttonTheme3} className='buttonCalc col-2' onClick={(e) => {setNumber(number + e.target.value)}} value={7} key={7}>7</button>
                <button style={theme === 1 ? buttonTheme1 : theme === 2 ? buttonTheme2 : buttonTheme3} className='buttonCalc col-2' onClick={(e) => {setNumber(number + e.target.value)}} value={8} key={8}>8</button>
                <button style={theme === 1 ? buttonTheme1 : theme === 2 ? buttonTheme2 : buttonTheme3} className='buttonCalc col-2' onClick={(e) => {setNumber(number + e.target.value)}} value={9} key={9}>9</button>
                <button style={theme === 1 ? delTheme1 : theme === 2 ? delTheme2 : delTheme3} className='buttonCalc col-2' onClick={() => setNumber(number.substr(0, number.length - 1))} value={'del'}>del</button>
                <button style={theme === 1 ? buttonTheme1 : theme === 2 ? buttonTheme2 : buttonTheme3} className='buttonCalc col-2' onClick={(e) => {setNumber(number + e.target.value)}} value={4} key={4}>4</button>
                <button style={theme === 1 ? buttonTheme1 : theme === 2 ? buttonTheme2 : buttonTheme3} className='buttonCalc col-2' onClick={(e) => {setNumber(number + e.target.value)}} value={5} key={5}>5</button>
                <button style={theme === 1 ? buttonTheme1 : theme === 2 ? buttonTheme2 : buttonTheme3} className='buttonCalc col-2' onClick={(e) => {setNumber(number + e.target.value)}} value={6} key={6}>6</button>
                <button style={theme === 1 ? buttonTheme1 : theme === 2 ? buttonTheme2 : buttonTheme3} className='buttonCalc col-2' onClick={(e) => setNumber(number + e.target.value)} value={'+'}>+</button>
                <button style={theme === 1 ? buttonTheme1 : theme === 2 ? buttonTheme2 : buttonTheme3} className='buttonCalc col-2' onClick={(e) => {setNumber(number + e.target.value)}} value={1} key={1}>1</button>
                <button style={theme === 1 ? buttonTheme1 : theme === 2 ? buttonTheme2 : buttonTheme3} className='buttonCalc col-2' onClick={(e) => {setNumber(number + e.target.value)}} value={2} key={2}>2</button>
                <button style={theme === 1 ? buttonTheme1 : theme === 2 ? buttonTheme2 : buttonTheme3} className='buttonCalc col-2' onClick={(e) => {setNumber(number + e.target.value)}} value={3} key={3}>3</button>
                <button style={theme === 1 ? buttonTheme1 : theme === 2 ? buttonTheme2 : buttonTheme3} className='buttonCalc col-2' onClick={(e) => setNumber(number + e.target.value)} value={'-'}>-</button>
                <button style={theme === 1 ? buttonTheme1 : theme === 2 ? buttonTheme2 : buttonTheme3} className='buttonCalc col-2' onClick={(e) => {setNumber(number + e.target.value)}} value={'.'} key={'.'}>.</button>
                <button style={theme === 1 ? buttonTheme1 : theme === 2 ? buttonTheme2 : buttonTheme3} className='buttonCalc col-2' onClick={(e) => {setNumber(number + e.target.value)}} value={0} key={0}>0</button>
                <button style={theme === 1 ? buttonTheme1 : theme === 2 ? buttonTheme2 : buttonTheme3} className='buttonCalc col-2' onClick={(e) => {setNumber(number + e.target.value)}} value={'/'} key={'/'}>/</button>
                <button style={theme === 1 ? buttonTheme1 : theme === 2 ? buttonTheme2 : buttonTheme3} className='buttonCalc col-2' onClick={(e) => setNumber(number + e.target.value)}  value={'*'}>x</button>
                <button style={theme === 1 ? delTheme1 : theme === 2 ? delTheme2 : delTheme3} className='buttonCalc col-4' onClick={() => setNumber(' ')} >reset</button>
                <button style={theme === 1 ? equalButtonTheme1 : theme === 2 ? equalButtonTheme2 : equalButtonTheme3} className='buttonCalc col-4 ms-4' onClick={
                    (e) => {
                        try {
                            setNumber(
                                String(eval(number)).length > 3 && String(eval(number)).includes('.') ? String(eval(number)).toFixed(4) : String(eval(number))
                            );
                        } catch (e) {
                            console.log(e)
                        }
                    }
                } value={'equal'}>=</button>
            </div>
        </div>
    );
}