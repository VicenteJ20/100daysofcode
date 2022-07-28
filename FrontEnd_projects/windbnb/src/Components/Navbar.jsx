import React, {useState} from "react";
import '../ComponentStyles/Navbar.css'
import Cards from "./Cards";

export default function Navbar({data}){

    const [myData, setMyData] = useState([]);
    const [findWord, setFindWord] = useState('');
    const [myGuest, setMyGuest] = useState('');

    const handleFilter = (e) => {
        const searchWord = e.target.value;
        setFindWord(searchWord);
        
        const newFilter = data.filter((value) => {
            return value.location.toLowerCase().includes(searchWord.toLowerCase())
        })

        if (searchWord === '') {
            setMyData([]);
        } else {
            setMyData(newFilter)
        }

    }

    const handleFilterGuest = (e) => {
        const searchAmount = e.target.value;
        setMyGuest(searchAmount);

        const newFilter = data.filter((value) => {
            return value.guests.includes(searchAmount);
        })

        if (searchAmount === 0 || searchAmount === ''){
            setMyGuest([]);
        } else {
            setMyGuest(newFilter);
        }
    }

    

    const clearInput = () => {
        setMyData([]);
        setFindWord('');
    }


    return (
        <nav className="nav_bar row m-0 align-items-end">
            <div className="brand_div col-md-8 align-items-end">
                <h1 className="title_nav"><i className="fa-solid fa-play"></i> Windbnb</h1>
            </div>
            <div className="searchBar_div col-md-4 m-0 p-0 row">
                <div className="search_input row ms-0 p-0 col-md-11">
                    <div className="search_place_input col-md-6 col-sm-12 p-0">
                        <input className="w-100 place_word" type='text' placeholder='Location' value={findWord} onChange={handleFilter}></input>
                    </div>
                    <div className="sort_place_input col-md-6 col-sm-12 p-0">
                        <input className="w-100 guest_number" type='number' min='2' max='8' placeholder="Number of guests" value={myGuest} onChange={handleFilterGuest}></input>
                    </div>
                </div>
                <div className="search_icon col-md-1 col-sm-12 m-0 p-0">
                    {
                        myData.length === 0 ? <button className="icon_button w-100 h-100"><i className="fa-solid fa-magnifying-glass"></i></button> : <button className="icon_button w-100 h-100" onClick={clearInput}><i id="clearBtn" className="fa-solid fa-xmark"></i></button>
                    }
                </div>
                {
                    myData.length !== 0 && (
                        <div className="data_result container-fluid">
                            {myData.slice(0,1).map((value) => {
                                return (
                                    <a className="item_data" href={value.imageURL} target="_blank" rel="noreferrer">
                                        <i className="fa-solid fa-location-dot"></i> {value.location}
                                    </a>
                                );
                            })}
                        </div>
                    )
                }
            </div>
            <Cards x={myData.length === 0 ? 'All' : myData.slice(0, 1).map(() => String(myData.length))} showData={myData} data={data}/>
        </nav>
    );
}