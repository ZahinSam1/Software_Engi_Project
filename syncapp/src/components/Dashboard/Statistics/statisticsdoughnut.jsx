import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


const StatisticsDoughnut = () => {
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
    <div className="StatisticsDoughnut"
    >
      <Doughnut data={chartData} options={chartOptions} />
    </div>
  );
};

export default StatisticsDoughnut;
// pi is for which type for files uploaded
// normal textfile video pic or audio file