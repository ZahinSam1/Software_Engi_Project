import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const StatisticsBar = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Users Gained",
        data: [],
        backgroundColor: [
          "#077094",
          "#0093A9",
          "#33B7B5",
          "#70D9B8",
          "#eb7f6cbc",
        ],
        borderColor: "#ABA9BB",
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://ec2-13-53-39-206.eu-north-1.compute.amazonaws.com:9000/testAPI");
      const userData = response.data;

      const labels = userData.map((data) => monthNames[data.month - 1]);
      const dataPoints = userData.map((data) => data.userGain);

      const updatedChartData = {
        ...chartData,
        labels,
        datasets: [
          {
            ...chartData.datasets[0],
            data: dataPoints,
          },
        ],
      };

      setChartData(updatedChartData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
        ticks: {
          autoSkip: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Users",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return (
    <div className="StatisticsBar">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default StatisticsBar;


// Please ensure that the API response includes a property representing the month index, or adjust the mapping logic accordingly based on the structure of your API response.
// It seems the issue lies in the mapping of the month property from the API response. Please make sure the API response contains a property named month with values representing the month index (1 to 12).
// If the API response doesn't include the month property, or if the property represents the month differently, you will need to adjust the mapping logic accordingly.