import { useState, useEffect } from "react";
import { useFatch } from "./useFatch";
import ReactApexChart from "react-apexcharts";
function BarChart() {
  let [bar, setBar] = useState({
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 380,
      },
      plotOptions: {
        bar: {
          barHeight: "100%",
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: "bottom",
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
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
          colors: ["#fff"],
        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
        },
        offsetX: 0,
        dropShadow: {
          enabled: true,
        },
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },
      xaxis: {
        categories: [
          "South Korea",
          "Canada",
          "United Kingdom",
          "Netherlands",
          "Italy",
          "France",
          "Japan",
          "United States",
          "China",
          "India",
        ],
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      title: {
        text: "Custom DataLabels",
        align: "center",
        floating: true,
      },
      subtitle: {
        text: "Category Names as DataLabels inside bars",
        align: "center",
      },
      tooltip: {
        theme: "dark",
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function () {
              return "";
            },
          },
        },
      },
    },
  });
  let { data } = useFatch("https://restcountries.com/v3.1/all");
  useEffect(() => {
    if (data) {
      const allPopuletion = data
        .sort((a, b) => b.population - a.population)
        .slice(0, 30)
        .map((item) => item.population);
      const allName = data
        .sort((a, b) => b.population - a.population)
        .slice(0, 30)
        .map((item) => item.name.common);

      setBar({
        series: [
          {
            data: allPopuletion,
          },
        ],
        options: {
          chart: {
            type: "bar",
            height: 380,
          },
          plotOptions: {
            bar: {
              barHeight: "100%",
              distributed: true,
              horizontal: true,
              dataLabels: {
                position: "bottom",
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
          dataLabels: {
            enabled: true,
            textAnchor: "start",
            style: {
              colors: ["#fff"],
            },
            formatter: function (val, opt) {
              return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
            },
            offsetX: 0,
            dropShadow: {
              enabled: true,
            },
          },
          stroke: {
            width: 1,
            colors: ["#fff"],
          },
          xaxis: {
            categories: allName,
          },
          yaxis: {
            labels: {
              show: false,
            },
          },
          title: {
            text: "Custom DataLabels",
            align: "center",
            floating: true,
          },
          subtitle: {
            text: "Category Names as DataLabels inside bars",
            align: "center",
          },
          tooltip: {
            theme: "dark",
            x: {
              show: false,
            },
            y: {
              title: {
                formatter: function () {
                  return "";
                },
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
            options={bar.options}
            series={bar.series}
            type="bar"
            height={700}
          />
        </div>
        <div id="html-dist"></div>
        <div>
          <h1>Country population top 30 </h1>
        </div>
      </div>
    )
  );
}

export default BarChart;
