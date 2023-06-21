import React, { useState } from "react";
import Navbar from "./Navbar/navbar";
import StatisticsBar from "./Statistics/statisticsbar";
import StatisticsLine from "./Statistics/statisticsline";
import StatisticsPie from "./Statistics/statisticspie";
import StatisticsDoughnut from "./Statistics/statisticsdoughnut";
import Files from "./Files/Files";
import "./dashboard.css"; // Import the CSS file


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
      <Navbar
        onFilesClick={handleFilesClick}
        onSettingsClick={handleSettingsClick}
        onHomeClick={handleHomeClick}
      />
      {activeComponent === "home" && (
        <>
          <h1 className="dashboard-title">DASHBOARD</h1>

          <div className="stat">
            <StatisticsBar />
            <StatisticsLine />
            <StatisticsDoughnut />
            <StatisticsPie />
          </div>
        </>
      )}
      {activeComponent === "files" && <Files />}
    </div>
  );
};

export default Dashboard;
