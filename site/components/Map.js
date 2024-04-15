import { useEffect, useState, useRef } from "react";
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";


const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const markers = useRef([]);
  const center = { lat: 39.501498676, lng: -120.529018597 };
  const [zoom] = useState(10);
  maptilersdk.config.apiKey = 'lmqG8jY8bRLCCZQlEm4p';

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: "e4e1ddff-ce00-45c3-b571-3cfa4f59021a",
      center: [center.lng, center.lat],
      zoom: zoom
    });

    const options = {
        color: "#032412",
        scale: 0.5,
    }

    markers.current = [
        /*new maptilersdk.Marker(options).setLngLat([39.5024839100001, -120.527716556].reverse()),
        new maptilersdk.Marker(options).setLngLat([39.49239814, -120.526750207].reverse()),
        new maptilersdk.Marker(options).setLngLat([39.5024839100001, -120.527716556].reverse()),
        new maptilersdk.Marker(options).setLngLat([39.4801374370001, -120.520662899].reverse()),
        new maptilersdk.Marker(options).setLngLat([39.470186192, -120.517103012].reverse()),
        new maptilersdk.Marker(options).setLngLat([39.4697350590001, -120.494265431].reverse()),
        new maptilersdk.Marker(options).setLngLat([39.455836172, -120.46889268].reverse()),
        new maptilersdk.Marker(options).setLngLat([39.4386429830001, -120.464450316].reverse()),
        new maptilersdk.Marker(options).setLngLat([39.4227573420001, -120.453402538].reverse()),
        new maptilersdk.Marker(options).setLngLat([39.409571038, -120.438676825].reverse()),
        new maptilersdk.Marker(options).setLngLat([39.4336398820001, -120.422625443].reverse()),
        new maptilersdk.Marker(options).setLngLat([39.4083201230001, -120.393225444].reverse()),
        new maptilersdk.Marker(options).setLngLat([39.389592701, -120.373845391].reverse()),
        new maptilersdk.Marker(options).setLngLat([39.3681400190001, -120.367222546].reverse()),
        new maptilersdk.Marker(options).setLngLat([39.3428370730001, -120.344219544].reverse()),*/
        new maptilersdk.Marker(options).setLngLat([39.3399569000001, -120.3351219].reverse())
            .setPopup(new maptilersdk.Popup().setHTML("<h1>End!</h1>")),
        new maptilersdk.Marker(options).setLngLat([39.5058618640001, -120.529315365].reverse())
            .setPopup(new maptilersdk.Popup().setHTML("<h1>Start!</h1>")),
        ];

    for (let marker of markers.current) {
        marker.addTo(map.current);
    }
  }, [center.lng, center.lat, zoom]);

  return (
      <div style={{
        height: "100%",
        width: "100%"
      }}>
        <div ref={mapContainer} style={{
            height: "100%",
            width: "100%"
        }} />
      </div>
  );
}

export default Map;
