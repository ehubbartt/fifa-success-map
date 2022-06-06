import React, {useState} from 'react'
import {BsArrowBarDown} from 'react-icons/bs'
import SelectorContainer from './SelectorContainer';
import { types } from "../constants/mapTypes";
import { mapData } from "../constants/mapData";
import { styles } from "../constants/styles";


const SettingsContainer = ({handleStyleChange}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCollapse = () => {
    setIsOpen(!isOpen);
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
            <SelectorContainer title="Data" selectors={mapData} />
          </div>
          </div>
  )
}

export default SettingsContainer