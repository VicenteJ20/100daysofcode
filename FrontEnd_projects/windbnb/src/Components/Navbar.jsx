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
        <div className="w-100 p-0 mt-5">
            <nav className="nav_bar row align-items-center mb-5">
                <div className="brand_div col-md-8 col-sm-3 align-items-end">
                    <h1 className="title_nav"><i className="fa-solid fa-play"></i> Windbnb</h1>
                </div>
                <div className="searchBar_div col-lg-4 col-sm-12 m-0 p-0 row">
                    <div className="search_input row ms-0 p-0 col-lg-11 col-sm-12">
                        <div className="search_place_input col-lg-6 col-sm-12 p-0">
                            <input className="w-100 place_word" type='text' placeholder='Location' value={findWord} onChange={handleFilter}></input>
                        </div>
                        <div className="sort_place_input col-lg-6 col-sm-12 p-0">
                            <input className="w-100 guest_number" type='number' min='2' max='8' placeholder="Number of guests" value={myGuest} onChange={handleFilterGuest}></input>
                        </div>
                    </div>
                    <div className="search_icon col-lg-1 col-sm-12 m-0 p-0">
                        {
                            myData.length === 0 ? <button className="icon_button w-100 h-100"><i className="fa-solid fa-magnifying-glass"></i></button> : <button className="icon_button w-100 h-100" onClick={clearInput}><i id="clearBtn" className="fa-solid fa-xmark"></i></button>
                        }
                    </div>
                    <div className="content_data_result">
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
                </div>
            </nav>
            <Cards x={myData.length === 0 ? 'All' : myData.slice(0, 1).map(() => String(myData.length))} showData={myData} data={data}/>
        </div>
    );
}