import React from "react";
import '../ComponentStyles/Cards.css';
import CardsInfo from "./CardsInfo";

export default function Cards({x, showData, data}){

    return (
        <div className="cards_top row">
            <div className="col-md-9 places_header_div">
                <h2 className="places_header">Stays in Finland</h2>
            </div>
            <div className="col-md-3 amount_header_div">
                <h3 className="amount_header">{x} stays selected</h3>
            </div>
            <div className="container-fluid">
            {
                    showData.length !== 0 && (
                        <div className="row">
                            {showData.slice().map((value) => {
                                    return (
                                        <CardsInfo data={value}/>
                                    );
                            })}
                        </div>
                    ) 
            }
            {
                showData.length === 0 && (
                    <div className="row">
                    {
                        data.slice().map((value) => {
                            return (
                                <CardsInfo data={value} />
                            );
                        })
                    }
                    </div>
                )
            }
            </div>
        </div>
    );
}