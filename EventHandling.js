import React from 'react'

export default function EventHandling() {
    const handleClick = () => {
        console.log("Button Clicked !")
    }

    return (
        <div>
            <h2>Event Handling</h2>
            <button onClick={handleClick}>Click Me!</button>
        </div>
    )
}
