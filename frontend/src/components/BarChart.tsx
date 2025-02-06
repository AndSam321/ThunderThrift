import React, { useEffect, useRef } from "react";
import Chart, { ChartConfiguration } from "chart.js/auto";

const BarChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  let chartInstance: Chart | null = null;

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const data = {
      labels: ["Yes", "No", "Depends"],
      datasets: [
        {
          label:
            "If there was an application for Simpson students to buy and sell items, would you use it?",
          data: [124, 8, 40],
          backgroundColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 205, 86, 0.2)",
          ],
          borderColor: [
            "rgba(75, 192, 192, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 205, 86, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    const config: ChartConfiguration = {
      type: "bar",
      data,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    chartInstance = new Chart(ctx, config);

    return () => {
      chartInstance?.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default BarChart;
