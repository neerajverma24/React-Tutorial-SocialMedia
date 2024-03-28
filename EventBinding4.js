import React, { useCallback } from 'react'

export default function EventBinding4() {

    const handleClick = useCallback(() => {
        console.log("Binding in function using useCallBack is working...")
    }, [])
    return (
        <div>
            <h1>Binding in Function Component using useCallBack Hook</h1>
            <p>This will Memoize the event handler and make sure it does not change between render.. This can improve performance by avoiding unnecessary re-renders caused by new event handler references..</p>

            <button onClick={handleClick}>Click Me !</button>
        </div>
    )
}
