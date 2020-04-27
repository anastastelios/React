import React from 'react'
import CityTitle from '../CityTitle'
import WeatherDesc from '../WeatherDesc'
import Temperature from '../Temperature'
import Location from '../Location'


function CityComponent(props) {
    return (
        <div style={{ border: '1px solid black', width: '35%', margin: '1rem' }}>
            <CityTitle name={props.name} country={props.area} />
            <WeatherDesc main={props.weatherMain} desc={props.weatherDesc} />
            <Temperature min={props.minTemp} max={props.maxTemp} />
            <Location lon={props.lon} lat={props.lat} />
        </div>
    )
}

export default CityComponent