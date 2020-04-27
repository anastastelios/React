import React from 'react'

function CityTitle(props) {
    return (
        <h2 style={{ textAlign: 'left', marginLeft: '1.5rem' }}>{props.name}, {props.country}</h2>
    )
}

export default CityTitle