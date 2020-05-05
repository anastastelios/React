import React, { useState } from 'react'
import './styles.css'
import CityComponent from '../CityComponent'

const Search = () => {

    const [city, setCity] = useState('');
    const [cityData, setCityData] = useState({});

    const handleChange = (e) => {
        const { value } = e.target;
        setCity(value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3ca5afa75f12717d4da7cefd2539a6d2`)
            .then(response => response.json())
            .then(data => {
                setCityData(data)
            })
            .catch(err => console.error(err));
    }

    return (
        <>
            <form onSubmit={handleClick} >
                <input
                    onChange={handleChange}
                    value={city}
                    className='searchBar'
                    name='city'
                    type='text'
                    placeholder='Search City...'>
                </input>
                <button className='searchBtn' type='submit'>Search</button>
            </form>
            {cityData.name ? <CityComponent
                name={cityData.name}
                area={cityData.sys.country}
                weatherMain={cityData.weather[0].main}
                weatherDesc={cityData.weather[0].description}
                minTemp={cityData.main.temp_min}
                maxTemp={cityData.main.temp_max}
                lon={cityData.coord.lon}
                lat={cityData.coord.lat} /> : <h2>Please select a city to display current weather data.</h2>}
        </>
    )
}

export default Search