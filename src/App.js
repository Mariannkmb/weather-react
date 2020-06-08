import React from "react";
import "./App.css";
import WeatherData from "./WeatherData";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <WeatherData />
      </header>
    </div>
  );
}

export default App;
