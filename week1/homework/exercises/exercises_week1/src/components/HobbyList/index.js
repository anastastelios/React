import React, { useState } from 'react'
import Hobby from '../Hobby'

function HobbyList() {
    const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"];
    const [state, setState] = useState(hobbies);

    return (
        <>
            {
                state.map((hobby, index) => {
                    return (
                        <Hobby key={index} name={hobby} />
                    )
                })
            }
        </>)
}

export default HobbyList