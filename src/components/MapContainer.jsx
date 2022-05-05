import React from "react";
import "../styles/map-container.css";
import Map from "react-map-gl";

const MapContainer = () => {
  return (
    <div className="map-container">
      <Map
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={
          "pk.eyJ1IjoiamFrb2J6aGFvIiwiYSI6ImNpcms2YWsyMzAwMmtmbG5icTFxZ3ZkdncifQ.P9MBej1xacybKcDN_jehvw"
        }
      />
    </div>
  );
};

export default MapContainer;
