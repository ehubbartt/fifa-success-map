import React, {useState} from 'react'
import { useMapContext } from '../context/mapContext'
import {BsArrowBarDown} from 'react-icons/bs'

const Legend = () => {
  const {curMap} = useMapContext();
  const [isOpen, setIsOpen] = useState(true);

  const handleCollapse = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='legend-container'>
      <div className="legend-title">
        <h2>Legend</h2>
          <div
            className={isOpen ? "hide-button rotate" : "hide-button"}
            onClick={handleCollapse}
            >
            <BsArrowBarDown />
          </div>
      </div>   
      <div className={isOpen ? "legend-info-container" : "legend-info-container closed"}>
        {curMap.name.includes("matchesMap") && <MatchesLegend/>}
        {curMap.name.includes("countriesMap") && <CountryLegend/>}
        {curMap.name.includes("playerMap") && <PlayerLegend/>}
        </div>   
    </div>
  )
}

const MatchesLegend = () => {
  return(
    <>
    <h3>Stadium Locations</h3>
    <div className="legend-item">
      <div className="legend-circle black"></div>
      <div className="legend-text">1 Stadium Location</div>
    </div>
    </>
  )
}

const CountryLegend= () => {
  return (
  <>
    <h3>Success Rating</h3>
  <div className='legend-item'>
    <div className="legend-circle grey"></div>
    <div className="legend-text">10</div>
  </div>
  <div className='legend-item'>
    <div className="legend-circle blue"></div>
    <div className="legend-text">100</div>
  </div>
  <div className='legend-item'>
    <div className="legend-circle green"></div>
    <div className="legend-text">1000</div>
  </div>
</>)
}


const PlayerLegend = () => {
return (
  <>
  <h3>Total Player Count</h3>
  <div className="legend-item">
    <div className="legend-square grade1"></div>
    <div className="legend-text">0-49</div>
  </div>
  <div className="legend-item">
    <div className="legend-square grade2"></div>
    <div className="legend-text">50-99</div>
  </div>
  <div className="legend-item">
    <div className="legend-square grade3"></div>
    <div className="legend-text">100-149</div>
  </div>
  <div className="legend-item">
    <div className="legend-square grade4"></div>
    <div className="legend-text">150-199</div>
  </div>
  <div className="legend-item">
    <div className="legend-square grade5"></div>
    <div className="legend-text">200-249</div>
  </div>
  <div className="legend-item">
    <div className="legend-square grade6"></div>
    <div className="legend-text">250+</div>
  </div>
  </>
)
}


export default Legend