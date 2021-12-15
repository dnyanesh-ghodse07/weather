import React, { useContext } from "react";
import { WeatherContext } from "../../Context/ContextProvider";
import classes from "./WeatherMain.module.css";
import DateNow from "../Date/Date";
import Loading from "../Loading/Loading";
import MoreInfo from "./WeatherInfo";
import Chart from "../chart/Chart";

function WeatherApp() {
  //context
  const weather = useContext(WeatherContext);

  const queryHandler = (e) => {
    weather.setCityName(e.target.value);
  };

  const handleShowMore = () => {
    weather.setShowMore(!weather.showMore);
  };

  const handleShowGraph = () => {
    weather.setShowGraph(!weather.showGraph);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <main className={classes.main}>
          <div className={classes.search_box}>
            <input
              type="text"
              className="search-bar"
              placeholder="Search Weather by city.."
              onChange={queryHandler}
            />
          </div>
          {weather?.loading ? (
            <Loading />
          ) : weather?.data?.getCityByName == null ? (
            <div className={classes.valid_name}>
              <h3>Enter valid city name</h3>
            </div>
          ) : (
            <div>
              <article>
                <div className={classes.dateLocation}>
                  <div className={classes.location}>
                    {weather.data?.getCityByName?.name},
                    {weather.data?.getCityByName?.country}
                  </div>
                  <div className={classes.date}>
                    <DateNow />
                  </div>
                </div>
                <div className={classes.icon}>
                  <img
                    src={`http://openweathermap.org/img/w/${weather.data?.getCityByName?.weather?.summary?.icon}.png`}
                    alt=""
                  />
                </div>
                <div className={classes.weatherbox}>
                  <div className={classes.temp}>
                    {Math.round(
                      weather.data?.getCityByName?.weather?.temperature
                        ?.actual - 273.15
                    )}
                    °c
                  </div>
                  <div className={classes.desc}>
                    <h5>
                      {weather.data?.getCityByName?.weather?.summary.title}
                    </h5>
                    <p>
                      {
                        weather.data?.getCityByName?.weather?.summary
                          ?.description
                      }
                    </p>
                  </div>
                </div>
              </article>
              <div className={classes.highLow}>
                <div className={classes.high}>
                  Todays's High :{" "}
                  {Math.round(
                    weather.data?.getCityByName?.weather?.temperature?.max -
                      273.15
                  )}
                  °c
                </div>
                <div className={classes.low}>
                  Todays's Low :{" "}
                  {Math.round(
                    weather.data?.getCityByName?.weather?.temperature?.min -
                      273.15
                  )}
                  °c
                </div>
              </div>
              {weather.showMore ? <MoreInfo /> : null}
            </div>
          )}
          <div className={classes.btn}>
            <button onClick={handleShowMore}>
              {weather.showMore ? "Hide Details" : "Show Details"}
            </button>
            <button className={classes.graphBtn} onClick={handleShowGraph}>
              {weather.showGraph ? "Hide Graph" : "Show Graph"}
            </button>
          </div>
        </main>
      </div>
      {weather.showGraph && <Chart />}
    </div>
  );
}

export default WeatherApp;
