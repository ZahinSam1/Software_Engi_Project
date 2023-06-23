import React from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


const StatisticsRadar = () => {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        id: 1,
        year: 2016,
        label: "User Gain",
        data: [800, 400, 600, 300, 800, 900],
        backgroundColor: [
          "#131352",
          "#E97156",
          "#0060A1",
          "#008493",
          "#B83B61",
          "#0090BE",
        ],
        
      },

      // Add more datasets as needed
    ],
  };
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };


  return (
    <div className="StatisticsPie"
    >
      <Radar data={chartData} options={chartOptions} />
    </div>
  );
};

export default StatisticsRadar;
// pi is for which type for files uploaded
// normal textfile video pic or audio file