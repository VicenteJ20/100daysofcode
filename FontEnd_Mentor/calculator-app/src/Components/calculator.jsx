import React,{useState} from 'react';
import '../ComponentsStyle/Calculator.css';

export default function Calculator({theme}){

    /* eslint no-eval: 0 */

    const [number, setNumber] = useState('');

    const buttonsTheme1Background = {
        backgroundColor: 'hsl(223, 31%, 20%)',
    }

    const displayTheme1 = {
        backgroundColor: 'hsl(224, 36%, 15%)',
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
    

    return (
        <div  className="CalculatorRoot container-fluid mt-5">
            <div style={displayTheme1} className='rootDisplay row container-fluid p-4'>
                {number}
            </div>
            <div style={buttonsTheme1Background} className='buttonDivCalc row container-fluid'>
                <button style={buttonTheme1} className='buttonCalc col-2' onClick={(e) => {setNumber(number + e.target.value)}} value={7} key={7}>7</button>
                <button style={buttonTheme1} className='buttonCalc col-2' onClick={(e) => {setNumber(number + e.target.value)}} value={8} key={8}>8</button>
                <button style={buttonTheme1} className='buttonCalc col-2' onClick={(e) => {setNumber(number + e.target.value)}} value={9} key={9}>9</button>
                <button style={delTheme1} className='buttonCalc col-2' onClick={() => setNumber(number.substr(0, number.length - 1))} value={'del'}>del</button>
                <button style={buttonTheme1} className='buttonCalc col-2' onClick={(e) => {setNumber(number + e.target.value)}} value={4} key={4}>4</button>
                <button style={buttonTheme1} className='buttonCalc col-2' onClick={(e) => {setNumber(number + e.target.value)}} value={5} key={5}>5</button>
                <button style={buttonTheme1} className='buttonCalc col-2' onClick={(e) => {setNumber(number + e.target.value)}} value={6} key={6}>6</button>
                <button style={buttonTheme1} className='buttonCalc col-2' onClick={(e) => setNumber(number + e.target.value)} value={'+'}>+</button>
                <button style={buttonTheme1} className='buttonCalc col-2' onClick={(e) => {setNumber(number + e.target.value)}} value={1} key={1}>1</button>
                <button style={buttonTheme1} className='buttonCalc col-2' onClick={(e) => {setNumber(number + e.target.value)}} value={2} key={2}>2</button>
                <button style={buttonTheme1} className='buttonCalc col-2' onClick={(e) => {setNumber(number + e.target.value)}} value={3} key={3}>3</button>
                <button style={buttonTheme1} className='buttonCalc col-2' onClick={(e) => setNumber(number + e.target.value)} value={'-'}>-</button>
                <button style={buttonTheme1} className='buttonCalc col-2' onClick={(e) => {setNumber(number + e.target.value)}} value={'.'} key={'.'}>.</button>
                <button style={buttonTheme1} className='buttonCalc col-2' onClick={(e) => {setNumber(number + e.target.value)}} value={0} key={0}>0</button>
                <button style={buttonTheme1} className='buttonCalc col-2' onClick={(e) => {setNumber(number + e.target.value)}} value={'/'} key={'/'}>/</button>
                <button style={buttonTheme1} className='buttonCalc col-2' onClick={(e) => setNumber(number + e.target.value)}  value={'*'}>x</button>
                <button style={delTheme1} className='buttonCalc col-4' onClick={() => setNumber(' ')} >reset</button>
                <button style={equalButtonTheme1} className='buttonCalc col-4 ms-4' onClick={
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