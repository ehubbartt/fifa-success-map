import React from 'react'
import { useMapContext } from "../context/mapContext";
 
const CountryDataInfo = () => {
  const {curData} = useMapContext();
  console.log(curData)
  return (
    <>
      <div className="data-container">
        <h3>Country</h3>
        <p>{curData.properties.country_name}</p>
      </div>
      <div className="data-container">
        <h3>WC Wins</h3>
        <p>{curData.properties.wc_wins}</p>
      </div>
      <div className="data-container">
        <h3>WC Ties</h3>
        <p>{curData.properties.wc_ties}</p>
      </div>
      <div className="data-container">
        <h3>WC Losses</h3>
        <p>{curData.properties.wc_losses}</p>
      </div>
      <div className="data-container">
        <h3>WC Champs</h3>
        <p>{curData.properties.wc_champs}</p>
      </div>
      <div className="data-container">
        <h3>Second Places</h3>
        <p>{curData.properties.second_place}</p>
      </div>
      <div className="data-container">
        <h3>Third Place</h3>
        <p>{curData.properties.third_place_wins}</p>
      </div>
    </>
  )
}

export default CountryDataInfo