import logo from './logo.svg';
import './App.css';
import WeatherSearch from './Weather';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
          <h1>Weather App</h1>
          <WeatherSearch/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
