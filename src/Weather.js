import React, { useState } from "react";
import axios from "axios";
//import Timestamp from "react-timestamp";

export default function WeatherSearch() {
  const [city, setCity] = useState("Houston");
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${
        response.data.weather[0].icon
      }@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  /*let apiKey = "094780c710fa4efd669f0df8c3991927";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);*/

  function updateCity(event) {
    setCity(event.target.value);
  }

  function link(){
        {updateCity}
        {handleSubmit}
  }
  const form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." onChange={updateCity} />
      <button type="Submit">Search</button>
    </form>
  );
  const ciudades =(
    <div>
    <a href="" value="Houston" onClick={link}>Houston</a> <a href="" onClick={handleSubmit}>Sidney</a> <a href="" onClick={handleSubmit}>Paris</a> <a href="" onClick={handleSubmit}>New York</a>
    </div>
    ); 
  return (
    <div>
      <br></br>
      {ciudades}
      <br></br>
      {form}
      <br></br>
      <ul>
        <li>{city}</li>
        <li>Temperature: {Math.round(weather.temperature)}oC</li>
        <li>Description: {weather.description}</li>
        <li>Humidity: {weather.humidity}%</li>
        <li>Wind: {weather.wind}km/h</li>
        <li>
          <img src={weather.icon} alt={weather.description} />
        </li>
      </ul>
    </div>
  );
}
