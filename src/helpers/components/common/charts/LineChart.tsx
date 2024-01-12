/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Title,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  ChartJS.register(
    LinearScale,
    LineElement,
    PointElement,
    Tooltip,
    Title,
    Legend
  );

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
        align: "center" as const,
        labels: {
          color: "#00000", // Set legend text color to black
        },
        padding: {
          bottom: 60, // Add padding to the bottom of the legend
        },
      },
      title: {
        display: true,
        text: "Sales Trend",
        color: "#00000",
        position: "top" as const,
        align: "start" as const,
        font: {
          size: 20,
          weight: "600", // Set font weight to semibold (600)
        },
        padding: {
          bottom: 20, // Add padding to the bottom of the legend
        },
      },
      font: {
        size: 12, // Set a default font size for other text elements
        family: "Poppins",
        style: "normal",
        color: "#00000", // Set text color to pitch black
      },
    },
    devicePixelRatio: window.devicePixelRatio || 1,
    maintainAspectRatio: false, // This allows the chart to have a dynamic aspect ratio
    scales: {
      x: {
        grid: {
          display: false,
          ticks: {
            color: "#00000",
          },
        },
      },
      y: {
        grid: {
          display: false,
          ticks: {
            color: "#00000",
          },
        },
      },
    },
  };

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Income",
        data: [15, 12, 10, 18, 22, 16, 28, 24, 30, 20, 18, 14],
        borderColor: "#0E84ED",
        backgroundColor: "rgba(14, 132, 237, 0.1)", // Optional: Add a transparent fill
        pointBorderColor: "#0E84ED",
        pointRadius: 5,
        pointHoverRadius: 7,
        borderWidth: 1, // Set the border width to 0 to hide the line
        fill: false, // Fill the area under the line
      },
      {
        label: "Expense",
        data: [10, 15, 8, 12, 18, 14, 20, 22, 16, 25, 30, 28],
        borderColor: "#99D045",
        backgroundColor: "rgba(153, 208, 69, 0.1)", // Optional: Add a transparent fill
        pointBorderColor: "#99D045  ",
        pointRadius: 5,
        pointHoverRadius: 7,
        borderWidth: 1, // Set the border width to 0 to hide the line
        fill: true, // Fill the area under the line
      },
    ],
  };

  return (
    <Line
      className="chart-container"
      options={options}
      data={data}
      style={{
        width: "800px",
        height: "10rem",
        paddingTop: "2rem",
      }}
    />
  );
};

export default LineChart;
