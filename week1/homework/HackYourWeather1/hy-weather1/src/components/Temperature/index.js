import React from 'react'

function Temperature(props) {
    return (
        <div style={{ textAlign: 'left', marginLeft: '1.5rem' }}>
            <p>Min Temp: {(props.min - 273.15).toFixed(1)}</p>
            <p>Max Temp: {(props.max - 273.15).toFixed(1)}</p>
        </div>
    )
}

export default Temperature