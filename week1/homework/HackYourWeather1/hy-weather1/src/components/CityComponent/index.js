import React from 'react'
import './styles.css'
import CityTitle from '../CityTitle'
import WeatherDesc from '../WeatherDesc'
import Temperature from '../Temperature'
import Location from '../Location'


function CityComponent(props) {
    return (
        <div className='city_comp'>
            <CityTitle name={props.name} country={props.area} id={props.id} setCityData={props.setCityData} />
            <WeatherDesc main={props.weatherMain} desc={props.weatherDesc} />
            <Temperature min={props.minTemp} max={props.maxTemp} />
            <Location lon={props.lon} lat={props.lat} />
        </div>
    )
}

export default CityComponent