import React, { useState, useEffect } from 'react'
import Joke from '../Joke'

const RandomJoke = () => {
    const [joke, setJoke] = useState({});

    useEffect(() => {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(data => setJoke(data))
            .catch(err => console.error(err));
    }, [])

    return (
        <Joke joke={joke} />
    )
}


export default RandomJoke