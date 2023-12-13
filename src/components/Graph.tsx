import React, { useEffect } from "react";
import Highcharts, { SeriesLineOptions } from "highcharts";

const Graph: React.FC = () => {
  useEffect(() => {
    const options: Highcharts.Options = {
      chart: {
        type: "line",
      },
      title: {
        text: "Monthly Average Temperature",
      },
      credits: {
        enabled: false,
      },
      xAxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yAxis: {
        title: {
          text: "Temperature (°C)",
        },
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true,
          },
          enableMouseTracking: false,
        },
      },
      series: [
        {
          type: "line",
          name: "Farm 1",
          data: [
            16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2, 22.0,
            17.8,
          ],
          color: "#2389da",
        },
        {
          type: "line",
          name: "Farm 2",
          data: [
            -2.9, -3.6, -0.6, 4.8, 10.2, 14.5, 17.6, 16.5, 12.0, 6.5, 2.0, -0.9,
          ],
          color: "#5abcd8",
        },
      ] as SeriesLineOptions[],
    };

    const chart = Highcharts.chart("container", options);

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div
      id="container"
      style={{ minWidth: "300px", height: "400px", margin: "0 auto" }}
    />
  );
};

export default Graph;
