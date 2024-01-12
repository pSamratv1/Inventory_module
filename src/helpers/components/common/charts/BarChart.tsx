/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Title,
    Legend
  );

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        align: "end" as const,
        labels: {
          color: "#00000", // Set legend text color to black
        },
      },
      title: {
        display: true,
        text: "Purchase and Sales Overview",
        color: "#00000",
        position: "top" as const,
        align: "start" as const,
        font: {
          size: 18,
          weight: "600",
        },
      },
      font: {
        size: 12, // Set a default font size for other text elements
        family: "Poppins",
        weight: "600",
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
        label: "Purchase",
        data: [12, 10, 8, 12, 10, 8, 12, 10, 8, 12, 10, 8],
        backgroundColor: "#0E84ED",
        borderRadius: 5,
        pointStyle: "square",
      },
      {
        label: "Sale",
        data: [8, 15, 10, 12, 10, 8, 12, 10, 8, 12, 10, 8],
        backgroundColor: "#99D045",
        borderRadius: 5,
      },
    ],
  };

  return (
    <Bar
      className="chart-container"
      options={options}
      data={data}
      style={{
        width: "750px",
        height: "17rem",
        paddingLeft: "2rem",
      }}
    />
  );
};

export default BarChart;
