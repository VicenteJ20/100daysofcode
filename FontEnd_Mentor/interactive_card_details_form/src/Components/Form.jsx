import React, {useState} from 'react';
import Cards from './Cards';
import '../StyleComponents/Form.css';

export default function Form(){

    const [holderValue, setHolderValue] = useState('');
    const [numberValue, setNumberValue] = useState('');
    const [monthValue, setMonthValue] = useState('');
    const [yearValue, setYearValue] = useState('');
    const [cvcValue, setCvcValue] = useState('');

    function onlyNumber(value){
        if (/[^0-9]/ig.test(value.replaceAll(' ', ''))){
            return true; // only if the input has number in the string.
        } else {
            return false; // it's returned if the input has a NaN character in the string.
        }
    }

    const handleHolderFilter = (e) => {
        setHolderValue(e.target.value);
    }

    const normalizeCardNumber = (value) => {
        return value.replace(/\s/g, "").match(/.{1,4}/g)?.join(" ").substr(0, 19) || ""
    }
    
    const handleNumberFilter = (e) =>{
        setNumberValue(normalizeCardNumber(e.target.value));
    }
    
    const handleMonthFilter = (e) => {
        setMonthValue(e.target.value.substr(0, 2));
    }

    const handleYearFilter = (e) => {
        setYearValue(e.target.value.substr(0, 2));
    }

    const handleCvcFilter = (e) => {
        setCvcValue(e.target.value.substr(0, 3));
    }

    const aprobeOrDenySubmit = (e) => {
        if (
            (holderValue !== '') && 
            (onlyNumber(numberValue) === false) &&
            (String(onlyNumber(numberValue)).length >= 5) &&
            (onlyNumber(monthValue) === false) &&
            (onlyNumber(yearValue) === false) && 
            (onlyNumber(cvcValue) === false && String(onlyNumber(cvcValue)).length >= 5)
        )
        {
            return true;
        } else {
            alert('ERROR, check all inputs');
            e.preventDefault();
        }
    }

    return (
        <div className='FormRoot'>
            <Cards cardHolder={holderValue} cardNumber={numberValue} expMonth={monthValue} expYear={yearValue} cvc={cvcValue}/>
            <form id='form' onSubmit={aprobeOrDenySubmit}>
                <div className='formDiv'>
                    <label htmlFor='cardName' className='formLabel'>CardHolder Name</label>
                    <input type='text' className="formInput" name='cardName' placeholder='e.g. Vicente Jorquera' value={holderValue} onChange={handleHolderFilter}></input>
                </div>
                <div className='formDiv'>
                    <label htmlFor='cardNumber' className='formLabel'>Card Number</label>
                    <input value={numberValue} className='formInput' onChange={handleNumberFilter} placeholder='e.g. 1234 5678 9123 0000' style={onlyNumber(numberValue) ?  {borderColor: 'hsl(0, 100%, 66%)'} : {borderColor: ''}}></input>
                    <span className='spanAlert' style={onlyNumber(numberValue) ?  {display: 'block'} : {display: 'none'}}>Wrong format, numbers only</span>
                </div>
                <div className='formDivDateCvc'>
                    <div className='expDateDiv formDiv'>
                        <label htmlFor='monthAndYear' className='formLabel'>Exp. Date (MM/YY)</label>
                        <div className='monthYearDiv'>
                            <input className='monthYearInput formInput' value={monthValue} onChange={handleMonthFilter} type='text' min='1' max='12' placeholder='MM' style={onlyNumber(monthValue) ?  {borderColor: 'hsl(0, 100%, 66%)'} : {borderColor: ''}}></input>
                            <input className='monthYearInput formInput' value={yearValue} onChange={handleYearFilter} type='text' placeholder='YY'  style={onlyNumber(yearValue) ?  {borderColor: 'hsl(0, 100%, 66%)'} : {borderColor: ''}}></input>
                        </div>
                        <span className='spanAlert' style={onlyNumber(monthValue) || onlyNumber(yearValue) ? {display: 'block'} : {display: 'none'}}>Wrong format, Numbers only.</span>
                    </div>
                    <div className='formDiv cvcDiv'>
                        <label htmlFor='cvc' className='formLabel'>CVC</label>
                        <input className='formInput' value={cvcValue} onChange={handleCvcFilter} type='text' placeholder='e.g. 123' style={onlyNumber(cvcValue) || (cvcValue.length > 0 &&  cvcValue.length < 3) ? {borderColor: 'hsl(0,100%,66%)'} : {borderColor: ''}}></input>
                        <span className='spanAlert' id='cvcSpan' style={onlyNumber(cvcValue) || (cvcValue.length > 0 &&  cvcValue.length < 3) ? {display: 'block'} : {display: 'none'}}>Wrong format</span> 
                    </div>
                </div>
                <div className='formDiv'>
                    <button  className='submitBtn'>Confirm</button>
                </div>
            </form>
        </div>
    );
}