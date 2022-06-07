import React from "react";
import { useMapContext } from "../context/mapContext";
const MatchesDataInfo = () => {
  const { curData } = useMapContext();
  if (!curData.properties) {
    return null;
  }

  let homeScore = curData.properties.HomeTeamGoals;
  let awayScore = curData.properties.AwayTeamGoals;
  const score = `${homeScore} - ${awayScore}`

  let winner;
  if (homeScore > awayScore) {
    winner = curData.properties.HomeTeamName;
  } else if(homeScore === awayScore) {
    winner = "Tie"
  } else {
    winner = curData.properties.AwayTeamName;
  }

  return (
    <>
      <div className="data-container">
        <h3>City</h3>
        <p>{curData.properties.City}</p>
      </div>
      <div className="data-container">
        <h3>Stadium</h3>
        <p>{curData.properties.Stadium}</p>
      </div>
      <div className="data-container">
        <h3>Home Team</h3>
        <p>{curData.properties.HomeTeamName}</p>
      </div>
      <div className="data-container">
        <h3>Away Team</h3>
        <p>{curData.properties.AwayTeamName}</p>
      </div>
      <div className="data-container">
        <h3>Score</h3>
        <p>{score}</p>
      </div>
      <div className="data-container">
        <h3>Winner</h3>
        <p>{winner}</p>
      </div>
      <div className="data-container">
        <h3>Attendance</h3>
        <p>{curData.properties.Attendance}</p>
      </div>
      <div className="data-container">
        <h3>Stage</h3>
        <p>{curData.properties.Stage}</p>
      </div>
    </>
  );
};

export default MatchesDataInfo;
