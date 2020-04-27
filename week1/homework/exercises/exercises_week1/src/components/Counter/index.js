import React, { useState } from 'react'
import Count from '../Count'
import Button from '../Button'

function Counter() {
    const [counter, setCounter] = useState(0)
    let feedback = counter > 10 ? `It's higher than 10` : `Keep counting...`
    return (
        <>
            <h3>{feedback}</h3>
            <Count counter={counter} />
            <Button counter={setCounter} />
        </>
    )
}

export default Counter