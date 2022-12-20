import React from "react";
// import { Pie } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js"; // 이거랑
Chart.register(ArcElement); // 이거 두줄 필수.. 없으면 차트 안뜸!

function PieChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Doughnut Chart</h2>
      <Doughnut
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
          },
        }}
      />
    </div>
  );
}
export default PieChart;
