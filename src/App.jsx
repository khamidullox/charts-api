import React from "react";
import "./App.css";
import PieChart from "./components/PieChart";
import BarChart from "./components/BarChart";
import CoulmChart from "./components/CoulmChart";
function App() {
  return (
    <div className="main-div">
      <PieChart />
      <BarChart />
      <CoulmChart />
    </div>
  );
}

export default App;
