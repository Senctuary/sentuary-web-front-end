import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import './styles/ValueGraph.css'

const OrdersChart = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Last year",
          data: [65, 59, 80, 81, 56, 55, 10],
        },
        {
          label: "This year",
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    };
    const options = {
      stacked: false,
      maintainAspectRatio: false,
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {},
        },
      },
      scales: {
        x: {
          ticks: {},
          grid: {},
        },
        y: {
          type: "linear",
          display: true,
          position: "left",
          ticks: {},
          grid: {},
        },
        y1: {
          type: "linear",
          display: true,
          position: "right",
          ticks: {},
          grid: {
            drawOnChartArea: false,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="card orders-chart-container">
      <Chart type="bar" data={chartData} options={chartOptions} />
    </div>
  );
};

export default OrdersChart;
