import './App.css';
import DayGraphic from './Components/DayGraphic';
import MyBalance from './Components/MyBalance';
import TotalMonth from './Components/TotalMonth';
import data from './data.json';

function myBalance(d){ // get total balance

  let amount = 0;

  for (let i = 0; i < data.length; i++){
    amount += d[i].amount;
  }

  return amount;
}

export default function App(){
  return (
    
    <div className='App row container-fluid m-0 pt-4'>
      <div className='rootContent col-lg-4 col-md-10 col-sm-10 col-8'>
        <MyBalance totalAmount={myBalance(data) * 5}/>
        <div className='graphicsStats p-4 container-fluid'>
          <h2 className='titleStats'>Spending - Last {data.length} days</h2>
          <div className='graphicsBarsDiv row container-fluid justify-content-center m-0'>
            {
              data.slice().map((val) => <DayGraphic day={val.day} percentage={val.amount} key={val.day}/>)
            }
          </div>
          <div className='totalMonthDiv mt-4'>
            <TotalMonth amount={myBalance(data)}/>
          </div>
        </div>
        <div className='footer_content'>
          <footer>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'>Frontend Mentor</a>. Coded by <a href="https://vicentejorquera.netlify.app">Vicente Jorquera</a>.</footer>
        </div>
      </div>
    </div>
  );
}