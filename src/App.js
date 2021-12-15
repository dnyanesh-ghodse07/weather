import React from "react";
import WeatherHome from "./components/Weather/WeatherHome";
import { WeatherProvider } from "./Context/ContextProvider";
import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://graphql-weather-api.herokuapp.com/",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <WeatherProvider>
        <WeatherHome />
      </WeatherProvider>
    </ApolloProvider>
  );
}

export default App;
