import React, {useState} from 'react';

export default function BillCard(){

    const [billValue, setBillValue] = useState();
    const [customValue, setCustomValue] = useState();
    const [peopleValue, setPeopleValue] = useState();

    const handleFilter = (e) => {
        const billAmount = e.target.value;
        setBillValue(billAmount);
    }

    const handleCustomFilter = (e) => {
        const customValue = e.target.value;
        setCustomValue(customValue);
    }

    const handlePeopleFilter = (e) => {
        const peopleNumber = e.target.value;
        setPeopleValue(peopleNumber);
    }

    const clearInputs = () =>{
        setBillValue(NaN);
        setCustomValue(NaN);
        setPeopleValue(NaN);
    }

    let amountForPerson = billValue === 0 || peopleValue === 0 ? 0
    : ((Math.round(billValue * customValue) / 100) / peopleValue)

    let totalAmount = billValue === 0 || peopleValue === 0 || isNaN(billValue) || isNaN(peopleValue) ? 0 : amountForPerson * peopleValue

    return (
        <div className='row col-lg-7 col-md-10 col-sm-11 col-11' id='card_div'>
            <div className='col-md-6 col-sm-12' id='bill_div'>
                <div className='div_input_bill col-md-12'>
                    <h3 className='bill_title'>Bill</h3>
                    <div className='w-100' id='icon_div'>
                        <i className="icon_input fa-solid fa-dollar-sign"></i>
                        <input className='w-100' type='number' value={billValue} onChange={handleFilter}></input>
                    </div>
                </div>
                <div className='select_tip_div'>
                    <h3 className='bill_title'>Select Tip %</h3>
                    <div className='div_button_tip row'>
                        <button className='btn btn_tip col-md-3 col-sm-4 col-5' value={customValue ? NaN : 5} onClick={handleCustomFilter}>5%</button>
                        <button className='btn btn_tip col-md-3 col-sm-4 col-5' value={customValue  ? NaN : 10} onClick={handleCustomFilter}>10%</button>
                        <button className='btn btn_tip col-md-3 col-sm-4 col-5' value={customValue  ? NaN : 15} onClick={handleCustomFilter}>15%</button>
                        <button className='btn btn_tip col-md-3 col-sm-4 col-5' value={customValue  ? NaN : 25} onClick={handleCustomFilter}>25%</button>
                        <button className='btn btn_tip col-md-3 col-sm-4 col-5' value={customValue  ? NaN : 50}  onClick={handleCustomFilter}>50%</button>
                        <input className='btn btn_tip_input col-md-3 col-sm-4 col-5' type='number' value={customValue} onChange={handleCustomFilter} placeholder="Custom"></input>
                    </div>
                </div>
                <div className='people_number_div'>
                    <h3 className='bill_title'>Number of People</h3>
                    <div className='div_input_bill col-md-12'>
                        <div className='w-100' id='icon_div'>
                            <i className="icon_input fa-solid fa-user"></i>
                            <input type='number' className='w-100' value={peopleValue} onChange={handlePeopleFilter}></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-6 col-sm-12 row' id='result_div'>
                <div className='amounts_div mb-5'>
                    <div className='tipAmountPeople row align-items-center'>
                        <div className='content_div_data col-md-6'>
                            <h3 className='tip_amount'>Tip Amount</h3>
                            <p className='person_amount'>/ person</p>
                        </div>
                        <div className='content_div_amount col-md-6'>
                            <p>{isNaN(amountForPerson) ? 0 : +(Math.round(amountForPerson + "e+2") + "e-2")}</p>
                        </div>
                    </div>
                    <div className='tipAmountPeople row'>
                        <div className='content_div_data col-md-6'>
                            <h3 className='tip_amount'>Total</h3>
                            <p className='person_amount'>/ person</p>
                        </div>
                        <div className='content_div_amount col-md-6'>
                            <p>{isNaN(totalAmount) ? 0 : +(Math.round(totalAmount + "e+2") + "e-2")}</p>
                        </div>
                    </div>
                </div>
                <div className='reset_button_div'>
                    <button className='btn-reset' onClick={clearInputs}>Reset</button>
                </div>
            </div>
        </div>
    );
}