import { useState } from "react";
import { Data } from "./coding_apple/Data";
import PieChart from "./coding_apple/PieChart";
import "./coding_apple/Chart.css"

export default function App() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const style = { width: "300px", border: "1px solid red" };
  return (
    <div className="App">
      <p>Using Chart.js in React</p>
      <div style={style}>
        <PieChart chartData={chartData} />
      </div>
      <div style={style}>
        <PieChart chartData={chartData} />
      </div>
    </div>
  );
}
