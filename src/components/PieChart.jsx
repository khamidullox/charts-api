import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useFatch } from "./useFatch";
import { useEffect } from "react";
function PieChart() {
  let [pic, setPic] = useState({
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  let { data } = useFatch("https://restcountries.com/v3.1/all");
  useEffect(() => {
    if (data) {
      const allPopuletion = data
        .sort((a, b) => b.area - a.area)
        .slice(0, 30)
        .map((item) => item.area);
      const allName = data
        .sort((a, b) => b.area - a.area)
        .slice(0, 30)
        .map((item) => item.name.common);

      setPic({
        series: allPopuletion,
        options: {
          chart: {
            width: 380,
            type: "pie",
          },
          labels: allName,
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
        },
      });
    }
  }, [data]);
  return (
    data && (
      <div>
        <div id="chart">
          <ReactApexChart
            options={pic.options}
            series={pic.series}
            type="pie"
            width={500}
            height={700}
          />
        </div>
        <div id="html-dist"></div>
        <div>
          <h1>Country area top 30 </h1>
        </div>
      </div>
    )
  );
}

export default PieChart;
