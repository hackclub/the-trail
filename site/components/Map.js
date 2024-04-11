import { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";


const Map = () => {

  const position = [39.5051054240001, -120.52777267];

  useEffect(() => {
    // Ensuring Leaflet's CSS is applied only on the client side.
    import("leaflet/dist/leaflet.css");
  })
  
  return (
    <div style={{width: "100%", height: "100%"}}>
     <MapContainer style={{width: "100%", height: "100%"}} center={position} zoom={13} scrollWheelZoom={false} >
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
