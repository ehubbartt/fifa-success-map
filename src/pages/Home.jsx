import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import MapContainer from "../components/MapContainer";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="page-container">
      <MapContainer />
    </div>
  );
};

export default Home;
