import React from "react";
import './Components_style/navbar.css';
import SearchBar from "./SearchBar";
export default function Navbar({placeHolder, myData, myType}){
    return(
        <nav className="nav_bar row m-0 align-items-center">
            <div className="brand_div col-md-8 align-items-center">
                <h1 className="title_nav "><i className="fa-solid fa-play"></i> windbnb</h1>
            </div>
            <div className="formNav_div col-md-4 m-0 p-0">
               <SearchBar placeholder={placeHolder} data={myData} type={myType}/>
            </div>
        </nav>
    );
}