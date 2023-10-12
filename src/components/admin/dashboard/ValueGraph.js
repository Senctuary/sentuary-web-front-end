import React from "react";
import { Chart } from "primereact/chart";
import "./styles/ValueGraph.css";

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Sales Value",
      data: [10567, 11115, 8064, 12908, 11213, 12908, 16145],
      fill: false,
      borderColor: "#4bc0c0",
    },
  ],
};

const options = {
  stacked: false,
  maintainAspectRatio: false,
  aspectRatio: 0.8,
  plugins: {
    title: {
      display: true,
      text: "Weekly Sales Value",
    },
    legend: {
      position: "bottom",
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.dataset.label}: $${context.dataset.data[
            context.dataIndex
          ].toFixed(2)}`;
        },
      },
    },
  },
  responsive: true,
};

const ValueGraph = () => {
  return (
    <div className="value-graph-container">
      <Chart
        className="value-chart"
        type="line"
        data={data}
        options={options}
      />
    </div>
  );
};

export default ValueGraph;
