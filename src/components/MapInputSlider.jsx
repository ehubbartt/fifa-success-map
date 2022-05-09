import React, { useState } from "react";

const MapInputSlider = () => {
  const [inputSliderValue, setInputSliderValue] = useState(2000);

  return (
    <div className="input-slider-container">
      <h3>{`Season: ${inputSliderValue}`}</h3>
      <input
        id="map-slider"
        type="range"
        min="1980"
        max="2020"
        step="10"
        onChange={(e) => setInputSliderValue(e.target.value)}
        value={inputSliderValue}
      />
      <div className="input-label">
        <span>1980</span>
        <span>2000</span>
        <span>2020</span>
      </div>
    </div>
  );
};

export default MapInputSlider;
