import cardLogo from '../images/card-logo.svg';
import '../StyleComponents/Cards.css';

export default function Cards({cardNumber, cardHolder, expMonth, expYear, cvc}){
    return (
        <div className="CardsRoot">
            <div className="frontCard">
                <img src={cardLogo} alt=""></img>
                <div className='contentFrontCard'>
                    <h2 className='cardNumber'>{cardNumber === '' ? '0000 0000 0000 0000' : cardNumber}</h2>
                    <div className='nameAnddate'>
                        <h3 className='cardName'>{cardHolder === '' ? 'Vicente Jorquera' : cardHolder}</h3>
                        <h3 className='dateName'>{expMonth === '' ? '00' : expMonth}/{expYear === '' ? '00' : expYear}</h3>
                    </div>
                </div>
            </div>
            <div className='backCard'>
                <h2 className='cvc'>{cvc === '' ? '000' : cvc}</h2>
            </div>
        </div>
    );
}