import React from "react";

export default function CardComponent({imgURL, superHost, hostType, startsEarned, title}){

    const styleCard = {
        width: '32%'
    }

    return (
        <div className="card" style={styleCard}>
            <img src={String(imgURL)} alt="representative room"></img>
            <p>{superHost ? 'Super habitación' : 'Habitación común'}</p>
            <p>{hostType}</p>
            <p>{startsEarned}</p>
            <p>{title}</p>
        </div>
    );
}