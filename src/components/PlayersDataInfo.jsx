import React from 'react'
import { useMapContext } from "../context/mapContext";
 
const PlayersDataInfo = () => {
  const {curData} = useMapContext();
  let country = curData.properties.country;
  return (
    <>
      <div className="data-container">
        <h3>Country</h3>
        <p>{curData.properties.country}</p>
      </div>
      <div className="data-container">
        <h3>Total Players</h3>
        <p>{curData.properties.total_players}</p>
      </div>
    </>
  )
}

export default PlayersDataInfo