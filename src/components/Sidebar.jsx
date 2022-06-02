import React from "react";
import SelectedData from "./SelectedData";
import Chart from "./Chart";
import MapInputSlider from "./MapInputSlider";
import { useMapContext } from "../context/mapContext";
import { styles } from "../constants/styles";

const Sidebar = () => {
  const { curMap, setCurMap } = useMapContext();

  const handleStyleChange = (style) => {
    let newMap = { ...curMap };
    newMap.style = style.uri;
    setCurMap(newMap);
  };

  return (
    <div className="sidebar">
      <MapInputSlider />
      <div className="divider"></div>
      <SelectedData />
      <Chart />
    </div>
  );
};

export default Sidebar;
