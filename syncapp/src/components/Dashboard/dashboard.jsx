import React, { useState } from "react";
import Navbar from "./Navbar/navbar";
import StatisticsBar from "./Statistics/statisticsbar";
import StatisticsLine from "./Statistics/statisticsline";
import StatisticsPie from "./Statistics/statisticspie";
import StatisticsDoughnut from "./Statistics/statisticsdoughnut";
import Files from "./Files/Files";
import "./dashboard.css"; // Import the CSS file
import StatisticsBubble from "./Statistics/statisticsbubble";
import StatisticsRadar from "./Statistics/statisticsradar";
import StatisticsScatter from "./Statistics/statisticsscatter";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("home");

  const handleFilesClick = () => {
    setActiveComponent("files");
  };

  const handleSettingsClick = () => {
    setActiveComponent("settings");
  };

  const handleHomeClick = () => {
    setActiveComponent("home");
  };

 
  return (
    <div className="container">
      <h1 className="dashboard-title">DASHBOARD</h1>
      <Navbar
        onFilesClick={handleFilesClick}
        onSettingsClick={handleSettingsClick}
        onHomeClick={handleHomeClick}
      />
      {activeComponent === "home" && (
        <>
          <div className="stat">
            <StatisticsBar/>
            <StatisticsPie/>
            {/* <StatisticsBubble/> */}
            <StatisticsRadar/>
            <StatisticsDoughnut/>
            <StatisticsLine/>
          </div>
          
        </>
      )}
      {activeComponent === "files" && <Files />}
    </div>
  );
};

export default Dashboard;
