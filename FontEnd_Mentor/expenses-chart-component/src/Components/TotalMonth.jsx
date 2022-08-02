import '../StyleComponents/TotalMonth.css'

export default function TotalMonth({amount}){
    return (

        <div className="totalMonthRoot row container-fluid">
            <div className="amountDiv col-6">
                <p className="titleAmount">Total this month</p>
                <h3 className="totalAmountCard">$ {amount * 2}</h3>
            </div>
            <div className="percentageDiv col-6 m-0">
                <h4 className="percentegeAmount">+{+( ( +amount || 0 ) * 0.03 ).toFixed(2)}%</h4>
                <p className="titleAmount">from last month</p>
            </div>
        </div>
        
    );
}