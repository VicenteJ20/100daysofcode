import React, {useState} from "react";
import './Components_style/SearchBar.css';

export default function SearchBar({placeholder, data, type}){

    const [myData, setMyData] = useState([]);
    const [findWord, setFindWord] = useState('');
    
    const handleFilter = (e) => {
        const searchWord = e.target.value;
        setFindWord(searchWord);
        const newFilter = data.filter((value) => {
            return value.title.toLoweCase().includes(searchWord.toLoweCase());
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
        <form className="search_form">
            <div className="search_input">
                <input type={type} placeholder={placeholder} value={findWord} onChange={handleFilter}></input>
                <div className="search_icon">
                    {
                        myData.length === 0 ? <button className="icon_button"><i className="fa-solid fa-magnifying-glass"></i></button> : <button className="icon_button"><i id="clearBtn" className="fa-solid fa-xmark" onClick={clearInput}></i></button>
                    }
                </div>
                {
                    myData.length !== 0 && (
                        <div className="data_result">
                            {myData.slice(0, 10).map((value, key) => {
                                return (
                                    <a className="item_data" href={value.link} target="_blank" rel="noreferrer">
                                        <p>{value.title}</p>
                                    </a>
                                );
                            })}
                        </div>
                    )
                }
            </div>
        </form>
    );
} 