import React from 'react'

function Guarantee(props) {
    return (
        <div className="guarantee" style={{ flexBasis: '25%', margin: 'auto' }}>
            <img src={props.img} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default Guarantee