import '../ComponentsStyle/PanelData.css';

export default function PanelData({ip, location, timezone, isp}){
    return (
        <div className="PanelDataRoot row container-fluid">
            <div className="col-12 col-md-3 infoDiv1 divParent">
                <h3 className="titleInfoDiv">IP Address</h3>
                <p className="resultInfoDiv">{ip}</p>
            </div>
            <div className="col-12 col-md-3 infoDiv divParent">
                <h3 className="titleInfoDiv">Location</h3>
                <p className="resultInfoDiv">{location}</p>
            </div>
            <div className="col-12 col-md-3 infoDiv divParent">
                <h3 className="titleInfoDiv">TimeZone</h3>
                <p className="resultInfoDiv">{timezone}</p>
            </div>
            <div className="col-12 col-md-3 infoDiv divParent">
                <h3 className="titleInfoDiv">ISP</h3>
                <p className="resultInfoDiv">{isp}</p>
            </div>
        </div>
    );
} 