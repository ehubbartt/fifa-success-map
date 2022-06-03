import React from 'react'

const MapInfo = ({children, title}) => {
  return (
    <div className="map-info">
      <h1>{title}</h1>
      {children}
    </div>
  )
}

export default MapInfo