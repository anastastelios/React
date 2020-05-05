import React from 'react'

const Joke = (props) => {
    return (
        <>
            <p>{props.joke.setup}</p>
            <p>{props.joke.punchline}</p>
        </>
    )
}

export default Joke