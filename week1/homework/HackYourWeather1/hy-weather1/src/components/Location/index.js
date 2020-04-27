import React from 'react'

function Location(props) {
    return (
        <p style={{ textAlign: 'left', margin: '1.5rem' }}>Location:   {props.lon}, {props.lat}</p>
    )
}

export default Location