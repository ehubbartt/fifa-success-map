import React from "react";
import "../styles/map-container.css";
import { useMapContext } from "../context/mapContext";
import mapboxgl from "mapbox-gl";
import MapInfo from "./MapInfo";
import SettingsContainer from "./SettingsContainer";
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
  const { curMap, setFeatures, setDataTitle, setCurData, setInputSliderValue, setInputDateValue } = useMapContext();

  const handleClick = (map) => {
    const curFeatures = map.features;
    if (curMap.name === "matchesMap") {
      setFeatures(curFeatures);
      setDataTitle("World Cup Data");
      setCurData(curFeatures[curFeatures.length - 1])
      setInputSliderValue(0);
      setInputDateValue(curFeatures[curFeatures.length - 1].properties.Datetime);
    } else if (curMap.name === "countriesMap") {
      setDataTitle("Country Data");
      setFeatures(curFeatures[0]);
      setCurData(curFeatures[0]);
    } else if(curMap.name === "playerMap") {
      console.log(map.features)
    }
  };

  console.log(curMap.name);

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
          <Source id={curMap.id} type="geojson" data={curMap.data} />
        )}
        {curMap.layerOptions && <Layer {...curMap.layerOptions} />}
        <ScaleControl position="bottom-right"/>
        <NavigationControl />
        <div className="stacked-container">
          <SettingsContainer />
          <MapInfo />
        </div>
      </Map>
    </div>
  );
};

export default MapContainer;
