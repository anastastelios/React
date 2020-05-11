import React, { useState } from 'react'
import './styles.css'
import CityComponent from '../CityComponent'

const Search = () => {

    const [city, setCity] = useState('');
    const [cityData, setCityData] = useState([]);

    const handleChange = (e) => {
        const { value } = e.target;
        setCity(value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        setCity('');
        if (city !== '') {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3ca5afa75f12717d4da7cefd2539a6d2`)
                .then(response => response.json())
                .then(data => {
                    setCityData(prevState => {
                        return [...prevState, { ...data, key: Math.random() }];
                    })
                })
                .catch(err => {
                    alert(`This is not a valid city`);
                })
        } else {
            alert(`Please insert a city before pressing the button...`)
        }
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

            {(cityData.length > 0) ? cityData.map((item, index) => {
                return <CityComponent
                    key={index}
                    setCityData={setCityData}
                    id={item.key}
                    name={item.name}
                    area={item.sys.country}
                    weatherMain={item.weather[0].main}
                    weatherDesc={item.weather[0].description}
                    minTemp={item.main.temp_min}
                    maxTemp={item.main.temp_max}
                    lon={item.coord.lon}
                    lat={item.coord.lat} />
            }) : <h2>Please select a city to display current weather data.</h2>}
        </>
    )
}

export default Search