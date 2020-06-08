import React, { useState } from "react";
import axios from "axios";
import LoaderSpinner from "./LoaderSpinner";

export default function WeatherData() {
  const [submit, setSubmit] = useState(false);
  const [city, setCity] = useState("");
  const [data, setData] = useState({});

  function getCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setSubmit(true);
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b5de5ed43000236f70d3412957f9f340`;
    axios.get(apiUrl).then(ShowTemperature);
  }

  function ShowTemperature(response) {
    setData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search for a city" onChange={getCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (submit) {
    return (
      <div>
        {form}
        {data.temperature ? (
          <ul>
            <li>Temperature: {Math.round(data.temperature)}°C </li>
            <li>Description: {data.description} </li>
            <li>Humidity: {data.humidity} %</li>
            <li>Wind: {data.wind} km/h </li>
            <li>
              <img src={data.icon} alt={data.description} />
            </li>
          </ul>
        ) : (
          <LoaderSpinner />
        )}
      </div>
    );
  } else {
    return <div> {form} </div>;
  }
}
