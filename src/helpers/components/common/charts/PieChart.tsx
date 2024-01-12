/* eslint-disable @typescript-eslint/no-explicit-any */
import { Chart as ChartJS, ArcElement, Tooltip, Title, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const PieChart = () => {
  ChartJS.register(ArcElement, Tooltip, Title, Legend);
  const options: any = {
    plugins: {
      title: {
        display: true,
        text: "Inventory Categories",
        font: {
          size: 20,
          weight: "600",
        },
        color: "#00000",
      },
      legend: {
        display: true,
        position: "right",
        color: "#00000",
        font: {
          size: 18,
          weight: "600",
        },

        // You can change the position as needed
      },
      font: {
        size: 12, // Set a default font size for other text elements
        family: "Poppins",
        weight: "600",
        style: "normal",
        color: "#00000", // Set text color to pitch black
      },
      devicePixelRatio: window.devicePixelRatio || 1,
      maintainAspectRatio: false, // This allows the chart to have a dynamic aspect ratio
    },
  };
  const data = {
    labels: [
      "Condiments",
      "Fruits",
      "Vegetables",
      "Grains",
      "Proteins",
      "Diary",
    ],
    datasets: [
      {
        data: [12, 10, 8, 12, 10, 8],
        backgroundColor: [
          "#FF3A29",
          "#02A0FC",
          "#5541D8",
          "#34B53A",
          "#FFB200",
          "#FFE5D3",
        ],
      },
    ],
  };

  return <Doughnut className="chart-container" options={options} data={data} />;
};

export default PieChart;
