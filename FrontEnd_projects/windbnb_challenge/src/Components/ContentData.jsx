import React from "react";
import CardComponent from "./CardComponent";
import './Components_style/ContentData.css';
import GetImportantInfo from "./GetImportantData";

function showAll(data){
    return (
        data.slice(0, ).map((val) => {
            return (
                <CardComponent imgURL={val.imageURL} superHost={val.superHost} hostType={val.hostType} startsEarned={val.startsEarned} title={val.title}/>
            );
        })
    );
}

export default function HeaderContent({amount, place, data}){

    console.log(<GetImportantInfo />)

    return (
        <div className="">
            <div className="header_content row mt-3 align-items-center">
                <h2 className="header_nav col-md-6">Stays in {place}</h2>
                <h3 className="amount_nav col-md-6">{amount === 0 ? '0' : String(amount)} stays</h3>
            </div>
            <div className="cards_grid bg-dark">
                {showAll(data)}
            </div>
        </div>
    );
}