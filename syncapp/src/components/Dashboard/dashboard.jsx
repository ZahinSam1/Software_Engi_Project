import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Navbar from "./Navbar/navbar";
import StatisticsBar from "./Statistics/statisticsbar";
import StatisticsLine from "./Statistics/statisticsline";
import StatisticsPie from "./Statistics/statisticspie";
import SyncUpdate from "./Update/update";
import Connected from "./Connected/connected";
import { UserData } from "./Statistics/data";
import "./dashboard.css"; // Import the CSS file
import FilesComponent from "./files/files";
import SettingsComponent from "./settings/settings";

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

  const UserData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Year 2022",
        data: [100, 200, 150, 300, 250, 400],
        backgroundColor: "grey",
        borderColor: "#ABA9BB",
        borderWidth: 1,
      },
      {
        label: "Year 2022",
        data: [150, 250, 50, 310, 290, 200],
        backgroundColor: "pink",
        borderColor: "#ABA9BB",
        borderWidth: 1,
      },
      // Add more datasets as needed
    ],
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
            <StatisticsBar chartData={UserData} />
            <StatisticsLine chartData={UserData} />
            <StatisticsPie chartData={UserData} />
          </div>
          <div className="sync">
            <SyncUpdate />
          </div>
          <div className="connected">
            <Connected />
          </div>
        </>
      )}
      {activeComponent === "files" && <FilesComponent />}
      {activeComponent === "settings" && <SettingsComponent />}
      {/* <div className="flex-container">
        <SyncUpdate />
        <Connected />
      </div> */}
    </div>
  );
};

export default Dashboard;
