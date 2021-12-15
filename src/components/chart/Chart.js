import React, { useContext } from "react";
import classes from "./Chart.module.css";
import { Line } from "react-chartjs-2";
import { WeatherContext } from "../../Context/ContextProvider";

function Chart() {
  const weather = useContext(WeatherContext);
  const forecastDays = [
    weather.forecast.list[7],
    weather.forecast.list[15],
    weather.forecast.list[23],
    weather.forecast.list[31],
    weather.forecast.list[39],
  ];

  console.log(forecastDays);
  const newDay = [];
  forecastDays.forEach((d) => {
    const dateN = new Date(d.dt * 1000).getDate();
    newDay.push(dateN);
  });

  const labels = [
    newDay[0] + " / 2021",
    newDay[1] + " / 2021",
    newDay[2] + " / 2021",
    newDay[3] + " / 2021",
    newDay[4] + " / 2021",
  ];

  //chart data
  const data = {
    labels: labels,
    datasets: [
      {
        label: "High",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [
          forecastDays[0].main.temp_max - 273.15,
          forecastDays[1].main.temp_max - 273.15,
          forecastDays[2].main.temp_max - 273.15,
          forecastDays[3].main.temp_max - 273.15,
          forecastDays[4].main.temp_max - 273.15,
        ],
      },
      {
        label: "Low",
        borderColor: "#aba",
        backgroundColor: "#123",
        data: [
          forecastDays[0].main.temp_min - 273.15,
          forecastDays[1].main.temp_min - 273.15,
          forecastDays[2].main.temp_min - 273.15,
          forecastDays[3].main.temp_min - 273.15,
          forecastDays[4].main.temp_min - 273.15,
        ],
      },
    ],
  };

  return (
    <div className={classes.chart}>
      <Line data={data} />
    </div>
  );
}

export default Chart;
