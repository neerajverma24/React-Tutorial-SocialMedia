import React, { useEffect, useState } from 'react'

function HookEffectCounter() {
    const [count, setCount] = useState(0)
    const [calculation, setCalculation] = useState(0)

    useEffect(() => {
        setCalculation(count * 2)
    }, [count])

    return (
        <div>
            <h1>useEffect Counter</h1>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count + 1)}>Counter +   </button>
            <p>Calculation : {calculation}</p>
        </div>
    )
}

export default HookEffectCounter
