import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const data = {
  labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  datasets: [
    {
      data: [10, 30, 27, 50, 18, 48, 60],
      borderColor: "#3751FF",
      borderWidth: 1,
    },
    {
      data: [20, 30, 5, 40, 18, 28, 50],
      borderColor: "#DFE0EB",
      borderWidth: 1,
    },
  ],
};

const ChartTrent = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default ChartTrent;
