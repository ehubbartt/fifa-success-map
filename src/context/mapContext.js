import React, { useState, useContext } from "react";
import { matchesMap } from "../constants/matchesMap";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [curMap, setCurMap] = useState(matchesMap);
  const [features, setFeatures] = useState();
  const [dataTitle, setDataTitle] = useState("Select a Data Point");
  const [curData, setCurData] = useState({});
  const [inputDateValue, setInputDateValue] = useState();
  const [inputSliderValue, setInputSliderValue] = useState();
  const [curStyle, setCurStyle] = useState("mapbox://styles/mapbox/dark-v10");

  return (
    <AppContext.Provider value={{ 
    curMap, 
    setCurMap, 
    features, 
    setFeatures, 
    dataTitle, 
    setDataTitle, 
    curData, 
    setCurData,
    inputDateValue,
    setInputDateValue,
    inputSliderValue,
    setInputSliderValue,
    curStyle,
    setCurStyle
     }}>
      {children}
    </AppContext.Provider>
  );
};

export const useMapContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
