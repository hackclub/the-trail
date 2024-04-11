import { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from "react-leaflet";


const Map = () => {

  const position = [39.5051054240001, -120.52777267];
  return (
    <div>
     <MapContainer center={position} zoom={13} scrollWheelZoom={false} >
    <TileLayer
     
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
       Hack
      </Popup>
    </Marker>
  </MapContainer>
    </div>
  );
}

export default Map;
