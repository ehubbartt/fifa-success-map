import React from "react";
import "../styles/map-container.css";
import { useMapContext } from "../context/mapContext";
import Map, {
  ScaleControl,
  NavigationControl,
  Source,
  Layer,
} from "react-map-gl";

const mapboxAccessToken =
  "pk.eyJ1IjoiamFrb2J6aGFvIiwiYSI6ImNpcms2YWsyMzAwMmtmbG5icTFxZ3ZkdncifQ.P9MBej1xacybKcDN_jehvw";

const MapContainer = () => {
  const { curMap, setCurMap } = useMapContext();

  const handleClick = (map) => {
    console.log(map.features);
  };

  return (
    <div className="map-container">
      <Map
        onClick={handleClick}
        initialViewState={{
          longitude: curMap.center[0],
          latitude: curMap.center[1],
          zoom: curMap.zoom,
        }}
        mapStyle={curMap.style}
        mapboxAccessToken={mapboxAccessToken}
        projection={curMap.projection}
        interactiveLayerIds={[curMap.layerOptions.id]}
      >
        {curMap.data && (
          <Source id={curMap.name} type="geojson" data={curMap.data} />
        )}
        {curMap.layerOptions && <Layer {...curMap.layerOptions} />}
        <ScaleControl />
        <NavigationControl />
      </Map>
    </div>
  );
};

export default MapContainer;
