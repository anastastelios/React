import React from 'react'
import './styles.css'

function Button(props) {
    return (
        <button className={'btn'} onClick={() => props.counter(prevState => prevState + 1)}> Add 1!</button >
    )
}

export default Button