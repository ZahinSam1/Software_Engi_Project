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


const Dashboard = () => {

  const [userData, setUserData]= useState({
    labels: UserData[0].months.map((month) => month.month),
    datasets: UserData.map((data) => ({
      label: `Year ${data.year}`,
      data: data.months.map((month) => month.userCount),
      backgroundColor: [
                "#077094",
                "#0093A9",
                "#33B7B5",
                "#70D9B8",
                "#eb7f6cbc",
                "#077094",
                "#0093A9",
                "#33B7B5",
                "#70D9B8",
                "#eb7f6cbc",
              ],
      borderColor: "#ABA9BB",
      borderWidth: 1,
    })),
  });

  // const [userData, setUserData] = useState({
  //   labels: UserData.map((data) => data.year),
  //   datasets: [
  //     {
  //       label: "Users Gained",
  //       data: UserData.map((data) => data.userGain),
  //       backgroundColor: [
  //         "#077094",
  //         "#0093A9",
  //         "#33B7B5",
  //         "#70D9B8",
  //         "#eb7f6cbc",
  //         "#077094",
  //         "#0093A9",
  //         "#33B7B5",
  //         "#70D9B8",
  //         "#eb7f6cbc",
  //       ],
  //       borderColor: "#ABA9BB",
  //       borderWidth: 1,
  //     },
  //   ],
  // });

  return (
    <div className="container">
      <h1 className="dashboard-title">DASHBOARD </h1>
      <Navbar />
      <div className="stat">
        <StatisticsBar chartData={userData} />

        <StatisticsLine chartData={userData} />

        <StatisticsPie chartData={userData} />
      </div>
      <div className="flex-container">
        {/* <SyncUpdate /> */}
        <Connected />
      </div>
    </div>
  );
};

export default Dashboard;
