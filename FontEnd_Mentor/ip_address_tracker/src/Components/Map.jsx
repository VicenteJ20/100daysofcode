import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import '../ComponentsStyle/Map.css';

export default function MapComponent({lat, lon}){
    return (
        <div className="MapRoot h-100 container-fluid m-0 p-0" id="map">
            <MapContainer className="mapContainer" center={[lat, lon, 14]} zoom={19}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
                <Marker position={[lat, lon, 27]}></Marker>
                <Popup className="popUpMap" position={[lat, lon]}></Popup>
            </MapContainer>
        </div>
    );
}