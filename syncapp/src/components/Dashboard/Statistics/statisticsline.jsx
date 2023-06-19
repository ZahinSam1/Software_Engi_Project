import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "../dashboard.css"; // Import the CSS file


const StatisticsLine = ({ chartData }) => {
  return (
    <div className="StatisticsLine"
    >
      <Line data={chartData} />
    </div>
  );
};

export default StatisticsLine;
// line will be daily usage 
// which house 12am to 11.59pm how much usage and upload
// or if i want then weekly usage