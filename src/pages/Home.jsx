import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import MapContainer from "../components/MapContainer";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="page-container">
      <Sidebar />
      <div className="page-content">
        <MapContainer />
      </div>
    </div>
  );
};

export default Home;
