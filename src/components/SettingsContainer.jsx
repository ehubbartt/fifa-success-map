import React, {useState} from 'react'
import {BsArrowBarDown} from 'react-icons/bs'
import SelectorContainer from './SelectorContainer';
import { mapData } from "../constants/mapData";
import { styles } from "../constants/styles";
import {useMapContext} from '../context/mapContext'
import { matchesMap } from '../constants/matchesMap';
import { countriesMap } from '../constants/countriesMap';
import { playerMap } from '../constants/playerMap';

const SettingsContainer = () => {
  const [isOpen, setIsOpen] = useState(true);
  const {curMap, setCurMap, setCurData, setFeatures, setDataTitle} = useMapContext();

  const handleCollapse = () => {
    setIsOpen(!isOpen);
  }

  const handleStyleChange = (style) => {
    let newMap = { ...curMap };
    newMap.style = style.uri;
    setCurMap(newMap);
  };

  const handleDataChange = ({name})=> {
    setCurData({});
    setFeatures({});
    setDataTitle("Select a Data Point");
    if (name === "World Cup Locations") {
      setCurMap(matchesMap);
    } else if (name === "Country Data") {
      setCurMap(countriesMap);
    } else if (name === "Player Data") {
      setCurMap(playerMap)
    }
  }

  return (
    <div className="settings-container">
            <div className="data-title">
              <h1>Map Settings</h1>
              <div
              className={isOpen ? "hide-button rotate" : "hide-button"}
              onClick={handleCollapse}
              >
              <BsArrowBarDown />
            </div>
          </div>
          <div className={isOpen ? "selectors-container" : "selectors-container closed"}>
            <SelectorContainer
              title="Styles"
              selectors={styles}
              onChange={handleStyleChange}
            />
            {/* <SelectorContainer title="Map Type" selectors={types} /> */}
            <SelectorContainer title="Data" selectors={mapData} onChange={handleDataChange}/>
          </div>
          </div>
  )
}

export default SettingsContainer