import React, { useState } from "react";
import Navbar from "./Navbar/navbar";
import StatisticsBar from "./Statistics/statisticsbar";
import StatisticsLine from "./Statistics/statisticsline";
import StatisticsPie from "./Statistics/statisticspie";
import SyncUpdate from "./Update/update";
import Connected from "./Connected/connected";
import SettingsComponent from "./settings/settings";
import Files from "./Files copy/Files";
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
            <StatisticsLine/>
            <StatisticsPie/>
          </div>
          <div className="sync">
            <SyncUpdate />
          </div>
          <div className="connected">
            <Connected />
          </div>
        </>
      )}
      {activeComponent === "files" && <Files />}
      {activeComponent === "settings" && <SettingsComponent />}
    </div>
  );
};

export default Dashboard;
