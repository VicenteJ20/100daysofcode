import React from "react";
import '../ComponentStyles/CardsInfo.css';

export default function CardsInfo({data}){
    return (
        <div className="card_div col-md-4 p-3 m-0">
            <figure className="figure_img">
                <img className="w-100 image_card" src={data.imageURL} alt={data.dtitle}></img>
            </figure>
            <div className="d-flex gap-2 content_info align-items-center">
                <p className="superHost" style={data.superHost === true ? {"display": 'block'} : {"display": 'none'}}>{data.superHost === true ? 'SuperHost': ''}</p>
                <div className="container-fluid p-0">
                    <p className="">{data.hostType}</p>
                </div>
                <p className="starsData d-flex gap-2 align-items-center"><i className="fa-solid fa-star"></i> {data.starsEarned}</p>
            </div>
            <h2 className="title_card">{data.title}</h2>
        </div>
    );
}