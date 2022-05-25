import React from "react";
import "../styles/sidebar.css";
import SelectorContainer from "./SelectorContainer";
import SelectedData from "./SelectedData";
import Chart from "./Chart";
import MapInputSlider from "./MapInputSlider";
import { useMapContext } from "../context/mapContext";
import { styles } from "../constants/styles";
import { types } from "../constants/mapTypes";
import { mapData } from "../constants/mapData";

const Sidebar = () => {
  const { curMap, setCurMap } = useMapContext();

  const handleStyleChange = (style) => {
    let newMap = { ...curMap };
    newMap.style = style.uri;
    setCurMap(newMap);
  };

  return (
    <div className="sidebar">
      <SelectorContainer
        title="Styles"
        selectors={styles}
        onChange={handleStyleChange}
      />
      <SelectorContainer title="Map Type" selectors={types} />
      <SelectorContainer title="Data" selectors={mapData} />
      <MapInputSlider />
      <div className="divider"></div>
      <SelectedData />
      <Chart />
    </div>
  );
};

export default Sidebar;
