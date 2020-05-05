import React from 'react';

const DogButton = (props) => {
    return (
        <button onClick={props.getDog}>Get a dog!</button>
    )
}

export default DogButton