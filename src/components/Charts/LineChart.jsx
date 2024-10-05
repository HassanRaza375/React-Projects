import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale, // Import CategoryScale
} from "chart.js";

// Register necessary Chart.js components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale // Register CategoryScale
);

const LineChart = () => {
  // Sample data
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1, // Curviness of the line
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false, // Optional: controls the aspect ratio
  };

  return (
    <div className="w-full">
      <Line
        data={data}
        options={options}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};

export default LineChart;
