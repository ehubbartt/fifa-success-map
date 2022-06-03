import React from 'react'

const MatchesDataInfo = (data) => {
  console.log(data)
  return (
    <>
    <h3>City</h3>
    <p>{data.data.city}</p>
    <h3>Stadium</h3>
    <p>{data.data.stadium}</p>
    <h3>Date</h3>
    <p>{data.data.date}</p>
    <h3>Home Team</h3>
    <p>{data.data.homeTeam}</p>
    <h3>Away Team</h3>
    <p>{data.data.awayTeam}</p>
    <h3>Score</h3>
    <p>{data.data.score}</p>
    <h3>Winner</h3>
    <p>{data.data.winner}</p>
    <h3>Attendance</h3>
    <p>{data.data.attendance}</p>
    </>
  )
}

export default MatchesDataInfo