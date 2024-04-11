import { useEffect, useState, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";

const Map = () => {
  useEffect(() => {
    import("leaflet/dist/leaflet.css");
  });

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MapContainer
        style={{ width: "100%", height: "100%" }}
        center={[39.5051054240001, -120.52777267]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker
          icon={leaflet.icon({
            iconUrl: "./circle.svg",
            iconSize: [16, 16],
            iconAnchor: [12, 12],
          })}
          position={[39.5024839100001, -120.527716556]}
        >
          <Popup>Hack</Popup>
        </Marker>

        <Marker
          icon={leaflet.icon({
            iconUrl: "./circle.svg",
            iconSize: [16, 16],
            iconAnchor: [12, 12],
          })}
          position={[39.49239814, -120.526750207]}
        >
          {/* <Popup>
       Hack
      </Popup> */}
        </Marker>

        <Marker
          icon={leaflet.icon({
            iconUrl: "./circle.svg",
            iconSize: [16, 16],
            iconAnchor: [12, 12],
          })}
          position={[39.4801374370001, -120.520662899]}
        >
          {/* <Popup>
       Hack
      </Popup> */}
        </Marker>

        <Marker
          icon={leaflet.icon({
            iconUrl: "./circle.svg",
            iconSize: [16, 16],
            iconAnchor: [12, 12],
          })}
          position={[39.470186192, -120.517103012]}
        >
          {/* <Popup>
       Hack
      </Popup> */}
        </Marker>

        <Marker
          icon={leaflet.icon({
            iconUrl: "./circle.svg",
            iconSize: [16, 16],
            iconAnchor: [12, 12],
          })}
          position={[39.4697350590001, -120.494265431]}
        >
          {/* <Popup>
       Hack
      </Popup> */}
        </Marker>

        <Marker
          icon={leaflet.icon({
            iconUrl: "./circle.svg",
            iconSize: [16, 16],
            iconAnchor: [12, 12],
          })}
          position={[39.455836172, -120.46889268]}
        >
          {/* <Popup>
       Hack
      </Popup> */}
        </Marker>

        <Marker
          icon={leaflet.icon({
            iconUrl: "./circle.svg",
            iconSize: [16, 16],
            iconAnchor: [12, 12],
          })}
          position={[39.455836172, -120.46889268]}
        >
          {/* <Popup>
       Hack
      </Popup> */}
        </Marker>

        <Marker
          icon={leaflet.icon({
            iconUrl: "./circle.svg",
            iconSize: [16, 16],
            iconAnchor: [12, 12],
          })}
          position={[39.4386429830001, -120.464450316]}
        >
          {/* <Popup>
       Hack
      </Popup> */}
        </Marker>

        <Marker
          icon={leaflet.icon({
            iconUrl: "./circle.svg",
            iconSize: [16, 16],
            iconAnchor: [12, 12],
          })}
          position={[39.4227573420001, -120.453402538]}
        >
          {/* <Popup>
       Hack
      </Popup> */}
        </Marker>

        <Marker
          icon={leaflet.icon({
            iconUrl: "./circle.svg",
            iconSize: [16, 16],
            iconAnchor: [12, 12],
          })}
          position={[39.4336398820001, -120.422625443]}
        >
          {/* <Popup>
       Hack
      </Popup> */}
        </Marker>

        <Marker
          icon={leaflet.icon({
            iconUrl: "./circle.svg",
            iconSize: [16, 16],
            iconAnchor: [12, 12],
          })}
          position={[39.4083201230001, -120.393225444]}
        >
          {/* <Popup>
       Hack
      </Popup> */}
        </Marker>

        <Marker
          icon={leaflet.icon({
            iconUrl: "./circle.svg",
            iconSize: [16, 16],
            iconAnchor: [12, 12],
          })}
          position={[39.389592701, -120.373845391]}
        >
          {/* <Popup>
       Hack
      </Popup> */}
        </Marker>

        <Marker
          icon={leaflet.icon({
            iconUrl: "./circle.svg",
            iconSize: [16, 16],
            iconAnchor: [12, 12],
          })}
          position={[39.3681400190001, -120.367222546]}
        >
          {/* <Popup>
       Hack
      </Popup> */}
        </Marker>

        <Marker
          icon={leaflet.icon({
            iconUrl: "./circle.svg",
            iconSize: [16, 16],
            iconAnchor: [12, 12],
          })}
          position={[39.3428370730001, -120.344219544]}
        >
          {/* <Popup>
       Hack
      </Popup> */}
        </Marker>

        <Marker
          icon={leaflet.icon({
            iconUrl: "./endMarker.svg",
            iconSize: [32, 32],
            iconAnchor: [12, 12],
          })}
          position={[39.3399569000001, -120.3351219]}
        >
          {/* <Popup>
       Hack
      </Popup> */}
        </Marker>

        <Marker
          icon={leaflet.icon({
            iconUrl: "./startMarker.svg",
            iconSize: [32, 32],
            iconAnchor: [12, 12],
          })}
          position={[39.5058618640001, -120.529315365]}
        >
          {/* <Popup>
       Hack
      </Popup> */}
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
