import React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './city-weather.json'
import Search from './components/Search'

function App() {
  // const citiesComponents = Data.map((city, index) => {
  //   return <CityComponent
  //     key={index}
  //     name={city.name}
  //     area={city.sys.country}
  //     weatherMain={city.weather[0].main}
  //     weatherDesc={city.weather[0].description}
  //     minTemp={city.main.temp_min}
  //     maxTemp={city.main.temp_max}
  //     lon={city.coord.lon}
  //     lat={city.coord.lat} />
  // })
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Weather</h1>
      <Search />

      {/* {citiesComponents} */}
    </div>
  );
}

export default App;
