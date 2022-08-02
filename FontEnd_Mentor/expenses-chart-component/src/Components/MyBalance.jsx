import '../StyleComponents/MyBalance.css';


export default function MyBalance({totalAmount}){
    return (
        <div className="myBalanceRoot m-0 row container-fluid">
            <div className='col-6'>
                <h3 className="titleBalance">My Balance</h3>
                <h2 className="totalAmount">$ {totalAmount}</h2>
            </div>
            <div className='col-6 iconsBrand'>
                <i className="iconRegular fa-regular fa-circle"></i>
                <i className="iconSolid fa-solid fa-circle"></i>
            </div>
        </div>
    );
}