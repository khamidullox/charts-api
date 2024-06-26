import React, { useState, useEffect } from "react";
import { useFatch } from "./useFatch";
import ReactApexChart from "react-apexcharts";
function CoulmChart() {
  let { data } = useFatch("https://dummyjson.com/products");

  let [coulm, setCoulm] = useState({
    series: [
      {
        data: [21, 22, 10, 28, 16, 21, 13, 30],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          },
        },
      },
      colors: [
        "#33b2df",
        "#546E7A",
        "#d4526e",
        "#13d8aa",
        "#A5978B",
        "#2b908f",
        "#f9a3a4",
        "#90ee7e",
        "#f48024",
        "#69d2e7",
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          ["John", "Doe"],
          ["Joe", "Smith"],
          ["Jake", "Williams"],
          "Amber",
          ["Peter", "Brown"],
          ["Mary", "Evans"],
          ["David", "Wilson"],
          ["Lily", "Roberts"],
        ],
        labels: {
          style: {
            colors: [
              "#33b2df",
              "#546E7A",
              "#d4526e",
              "#13d8aa",
              "#A5978B",
              "#2b908f",
              "#f9a3a4",
              "#90ee7e",
              "#f48024",
              "#69d2e7",
            ],
            fontSize: "12px",
          },
        },
      },
    },
  });
  useEffect(() => {
    if (data) {
      const allPopuletion = data.products
        .sort((a, b) => b.rating - a.rating)

        .map((item) => item.rating);
      const allName = data.products
        .sort((a, b) => b.rating - a.rating)

        .map((item) => item.title);

      setCoulm({
        series: [
          {
            data: allPopuletion,
          },
        ],
        options: {
          chart: {
            height: 350,
            type: "bar",
            events: {
              click: function (chart, w, e) {
                // console.log(chart, w, e)
              },
            },
          },
          colors: [
            "#33b2df",
            "#546E7A",
            "#d4526e",
            "#13d8aa",
            "#A5978B",
            "#2b908f",
            "#f9a3a4",
            "#90ee7e",
            "#f48024",
            "#69d2e7",
          ],
          plotOptions: {
            bar: {
              columnWidth: "45%",
              distributed: true,
            },
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: false,
          },
          xaxis: {
            categories: allName,
            labels: {
              style: {
                colors: [
                  "#33b2df",
                  "#546E7A",
                  "#d4526e",
                  "#13d8aa",
                  "#A5978B",
                  "#2b908f",
                  "#f9a3a4",
                  "#90ee7e",
                  "#f48024",
                  "#69d2e7",
                ],
                fontSize: "12px",
              },
            },
          },
        },
      });
    }
  }, [data]);
  return (
    data && (
      <div>
        <div id="chart">
          <ReactApexChart
            options={coulm.options}
            series={coulm.series}
            type="bar"
            height={500}
            width={700}
          />
        </div>
        <div id="html-dist"></div>
        <div className="h1__main">
          <h1>Products Raiting</h1>
        </div>
      </div>
    )
  );
}

export default CoulmChart;
