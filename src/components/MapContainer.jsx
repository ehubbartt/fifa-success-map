import React from "react";
import "../styles/map-container.css";
import { useMapContext } from "../context/mapContext";
import SelectorContainer from "./SelectorContainer";
import { types } from "../constants/mapTypes";
import { mapData } from "../constants/mapData";
import mapboxgl from "mapbox-gl";
import { styles } from "../constants/styles";
import Map, {
  ScaleControl,
  NavigationControl,
  Source,
  Layer,
} from "react-map-gl";
mapboxgl.workerClass =
  // eslint-disable-next-line import/no-webpack-loader-syntax
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;
const mapboxAccessToken =
  "pk.eyJ1IjoiamFrb2J6aGFvIiwiYSI6ImNpcms2YWsyMzAwMmtmbG5icTFxZ3ZkdncifQ.P9MBej1xacybKcDN_jehvw";

const MapContainer = () => {
  const { curMap, setCurMap } = useMapContext();

  const handleClick = (map) => {
    console.log(map.features);
  };

  const handleStyleChange = (style) => {
    let newMap = { ...curMap };
    newMap.style = style.uri;
    setCurMap(newMap);
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
        <div className="settings-container">
          <SelectorContainer
            title="Styles"
            selectors={styles}
            onChange={handleStyleChange}
          />
          <SelectorContainer title="Map Type" selectors={types} />
          <SelectorContainer title="Data" selectors={mapData} />
        </div>
      </Map>
    </div>
  );
};

export default MapContainer;
