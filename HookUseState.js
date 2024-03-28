import React, { useState } from 'react'

export default function HookUseState() {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        if (count <= 0) {
            return;
        } else {
            setCount(count - 1);
        }
    }
    return (
        <div>
            <h1 style={{ color: "Blue" }}>Counter | useState Hook</h1>
            <p>Count : {count}</p>
            <button onClick={increase}>Increase the Count</button> &nbsp;&nbsp;&nbsp;
            <button onClick={decrease}>Decrease the Count</button>
        </div>
    )
}
