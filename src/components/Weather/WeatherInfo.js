import React, { useContext } from "react";
import classes from "./WeatherInfo.module.css";
import { WeatherContext } from "../../Context/ContextProvider";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { WiHumidity } from "react-icons/wi";
import { GiPaperWindmill } from "react-icons/gi";
import { CgCompressV } from "react-icons/cg";

function WeatherInfo() {
  const weather = useContext(WeatherContext);

  //timestamp conversion
  const sunrise = new Date(
    weather.forecast?.city.sunrise * 1000
  ).toLocaleTimeString();
  const sunset = new Date(
    weather.forecast?.city.sunset * 1000
  ).toLocaleTimeString();

  console.log(weather.forecast);
  return (
    <div className={classes.weatherInfo}>
      <div className={classes.humi}>
        <li className={classes.icon}>
          <span>
            <GiPaperWindmill /> Wind Speed :
          </span>
          {weather.data?.getCityByName?.weather?.wind?.speed} m/s
        </li>
        <li className={classes.icon}>
          <span>
            <WiHumidity /> Humidity :
          </span>
          {weather.data?.getCityByName?.weather?.clouds?.humidity} g.kg
          <sup>-1</sup>
        </li>
        <li className={classes.icon}>
          <span>
            <CgCompressV /> Pressure :
          </span>
          {weather.forecast?.list[0].main.pressure} Pa
        </li>
      </div>
      <div>
        <li className={classes.icon}>
          <span>
            <FiSunrise /> Sunrise :
          </span>
          {sunrise}
        </li>
        <li className={classes.icon}>
          <span>
            <FiSunset /> Sunset :
          </span>
          {sunset}
        </li>
      </div>
    </div>
  );
}

export default WeatherInfo;
