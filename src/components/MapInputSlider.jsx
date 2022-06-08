import React from "react";
import { Slider } from "@mui/material";
import { useMapContext } from "../context/mapContext";
const MapInputSlider = ({ isOpen }) => {
  const {setCurData, features, inputDateValue, setInputDateValue, inputSliderValue, setInputSliderValue} = useMapContext();
  //reverse array bc reverse chronological order
  let allData = Array.from(features).reverse();

  let marks =  allData.map((item, index) => {
    const mark = {
      value: index,
      date: item.properties.Datetime, 
    }
    return mark;
  })

    const handleInputChange = (event, value) => {
      setInputDateValue(marks[value].date);
      setCurData(allData[value]);
      setInputSliderValue(value);
    }
    

  return (
   <div className={isOpen ? "input-slider-container" : "input-slider-container closed"} 
   style={isOpen ? {} : {overflow:"hidden"}}>
      <h3>{`Date: ${inputDateValue}`}</h3>
      <Slider 
      aria-label="Restricted values"
        step={null}
        min={0}
        max={marks.length - 1}
        value={inputSliderValue}
        onChange={handleInputChange}
        valueLabelDisplay="off"
        marks={marks}/>
    </div>
  );
};

export default MapInputSlider;
