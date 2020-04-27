import React from 'react'
import './styles.css'

function WeatherDesc(props) {
    return (
        <div style={{ textAlign: 'left', marginLeft: '1.5rem' }}>
            <h3 style={{ textDecoration: 'bold' }}>{props.main}</h3>
            <p style={{ marginBottom: '1rem' }}>{props.desc}</p>
        </div>
    )
}

export default WeatherDesc