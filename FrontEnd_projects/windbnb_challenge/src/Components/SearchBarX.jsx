import React, {useState} from "react";
import './Components_style/SearchBar.css'

export default function SearchBarX({placeholder, data}){

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (e) => {
       const searchWord = e.target.value;
       setWordEntered(searchWord);
       const newFilter = data.filter((value) => {
        return value.title.toLowerCase().includes(searchWord.toLowerCase());
       })

       if (searchWord === ""){
        setFilteredData([])
       } else {
        setFilteredData(newFilter)
       }
    }

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered('');
    }

    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
                <div className="searchIcon">
                    {filteredData.length === 0 ? <i className="fa-solid fa-magnifying-glass"></i> : <i id="clearBtn" className="fa-solid fa-xmark" onClick={clearInput}></i>}
                </div>
            </div>
            {filteredData.length !== 0 && (
                <div className="dataResult">
                {filteredData.slice(0, 15).map((value, key) => {
                    return (
                        <a className="dataItem" href={value.link} target="_blank" rel="noreferrer">
                            <p>{value.title}</p>
                        </a>
                    );
                })}
            </div>
            )}
        </div>
    );
}