import React from 'react'
import './styles.css'

function CityTitle(props) {

    function removeCity() {
        return props.setCityData(function (prevState) {
            return prevState.filter(function (city) {
                return city.key !== props.id
            })
        })
    }

    return (
        <>
            <div className='city_title-div'>
                <h2 className='city_title'>{props.name}, {props.country}</h2>
                <button className='city_title-btn' id={props.id} onClick={removeCity}>X</button>
            </div>
        </>
    )
}

export default CityTitle