import React, { useEffect, useState } from 'react'

function HookEffectCleanup() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCount(() => count + 1)
        }, 1000)
    }, [])  // without any dependency it will render the timer continuouly with interval 1s
    // with an empty array dependency, it will render the counter for 1 only..

    return (
        <div>
            <h1>Hook Effect Cleanup</h1>
            <h3>I have rendered the {count} timer</h3>
        </div>
    )
}

export default HookEffectCleanup
