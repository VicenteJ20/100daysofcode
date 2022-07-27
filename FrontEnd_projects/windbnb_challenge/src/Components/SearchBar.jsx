import React, {useState} from "react";
import './Components_style/SearchBar.css';
import GetImportantInfo from "./GetImportantData";

export default function SearchBar({placeholder, data, type}){

    const [myData, setMyData] = useState([]);
    const [findWord, setFindWord] = useState('');
    
    const handleFilter = (e) => {
        const searchWord = e.target.value;
        setFindWord(searchWord);
        const newFilter = data.filter((value) => {
            return value.location.toLowerCase().includes(searchWord.toLowerCase());
        })

        if (searchWord === ''){
            setMyData([]);
        } else {
            setMyData(newFilter);
        }
    }

    const clearInput = () => {
        setMyData([]);
        setFindWord('');
    }

    return (
        <div className="search_form row">
            <div className="search_input col-md-10 col-sm-12">
                <input className="w-100 inputWord" type={type} placeholder={placeholder} value={findWord} onChange={handleFilter}></input>
            </div>
            <div className="search_icon col-md-2 col-sm-12 m-0 p-0">
                {
                    myData.length === 0 ? <button className="icon_button w-100 h-100"><i className="fa-solid fa-magnifying-glass"></i></button> : <button className="icon_button w-100 h-100" onClick={clearInput}><i id="clearBtn" className="fa-solid fa-xmark"></i></button>
                }
            </div>
            {
                myData.length !== 0 && (
                    <div className="data_result">
                        {myData.slice(0, 1).map((value) => {
                            return (
                                <a className="item_data" href={value.imageURL} target="_blank" rel="noreferrer">
                                    <p><i className="fa-solid fa-location-dot"></i> {value.location}</p>
                                </a>,
                                <GetImportantInfo place={value.location} />
                            );
                        })}
                    </div>
                    )
                }
        </div>
    );
} 