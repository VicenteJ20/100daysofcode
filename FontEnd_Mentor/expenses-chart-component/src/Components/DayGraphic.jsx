import '../StyleComponents/DayGraphic.css';

export default function DayGraphic({day, percentage}){
    return (
        <div className="dayGraphicRoot col-1 container-fluid p-0">
            <div className="backgroundBar">
                {
                    percentage > 50.0 ? <div className="fillBar" data-title={percentage + '%'}  style={{height: String(percentage) + '%', backgroundColor: 'hsl(186, 34%, 60%)'}}></div> : <div className="fillBar" data-title={percentage + '%'}  style={{height: String(percentage) + '%', backgroundColor: 'hsl(10, 79%, 65%)'}}></div>
                }
            </div>
            <div className="titleDayDiv">
                <h3 className="titleDay">{day}</h3>
            </div>
        </div>
    );
}