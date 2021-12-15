import React, { createContext, useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER } from "../graphql/query";

export const WeatherContext = createContext();
export const WeatherProvider = ({ children }) => {
  const [cityName, setCityName] = useState("bangalore");
  const [showMore, setShowMore] = useState(false);
  const [showGraph, setShowGraph] = useState(false);
  const [forecast, setForecast] = useState({});

  //weather data graphql
  const [getWeather, { loading, data, error }] = useLazyQuery(GET_WEATHER, {
    variables: {
      name: cityName,
    },
  });

  //forecast data
  const API_KEY = "f32cfa0133a992d042027732e48eae99";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`;

  useEffect(() => {
    getWeather();
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setForecast(data);
      });
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        cityName,
        setCityName,
        loading,
        data,
        error,
        showMore,
        setShowMore,
        showGraph,
        setShowGraph,
        forecast,
        setForecast,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
