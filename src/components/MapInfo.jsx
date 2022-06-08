import React, { useState } from "react";
import { BsArrowBarDown } from "react-icons/bs";
import MatchesDataInfo from "./MatchesDataInfo";
import MapInputSlider from "./MapInputSlider";
import { useMapContext } from "../context/mapContext";
import CountryDataInfo from "./CountryDataInfo"

const MapInfo = () => {
  const { dataTitle } = useMapContext();
  const [isOpen, setIsOpen] = useState(true);
  const handleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="map-info-container">
      <div className="top-container">
      <div className="data-title">
        <h1>{dataTitle}</h1>
        {!dataTitle.includes("Select a Data Point") && (
          <div
            className={isOpen ? "hide-button rotate" : "hide-button"}
            onClick={handleCollapse}
          >
            <BsArrowBarDown />
          </div>
        )}
      </div>
        {dataTitle.includes("World Cup Data") && <MapInputSlider isOpen={isOpen}/>}
      </div>
      <div className={isOpen ? "map-info" : "map-info closed"}>
        {dataTitle.includes("World Cup Data") && <MatchesDataInfo />}
        {dataTitle.includes("Country Data") && <CountryDataInfo />}
        </div>
    </div>
  );
};

export default MapInfo;
