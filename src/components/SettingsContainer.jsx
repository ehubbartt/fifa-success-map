import React, {useState} from 'react'
import {BsArrowBarDown} from 'react-icons/bs'
import SelectorContainer from './SelectorContainer';
import { types } from "../constants/mapTypes";
import { mapData } from "../constants/mapData";
import { styles } from "../constants/styles";
import {useMapContext} from '../context/mapContext'
import { matchesMap } from '../constants/matchesMap';
import { countriesMap } from '../constants/countriesMap';

const SettingsContainer = () => {
  const [isOpen, setIsOpen] = useState(true);
  const {curMap, setCurMap} = useMapContext();

  const handleCollapse = () => {
    setIsOpen(!isOpen);
  }

  const handleStyleChange = (style) => {
    let newMap = { ...curMap };
    newMap.style = style.uri;
    setCurMap(newMap);
  };

  const handleDataChange = ({name})=> {
    if (name === "World Cup Locations") {

      setCurMap(matchesMap);
    } else if (name === "Country Data") {

      setCurMap(countriesMap);
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
            <SelectorContainer title="Map Type" selectors={types} />
            <SelectorContainer title="Data" selectors={mapData} onChange={handleDataChange}/>
          </div>
          </div>
  )
}

export default SettingsContainer