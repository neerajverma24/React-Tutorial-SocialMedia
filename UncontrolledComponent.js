import React, { useRef } from 'react'

export default function UncontrolledComponent() {
    const inputRef = useRef(null);
    // console.log(inputRef)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);
    }


    return (
        <div>
            <h2>Uncontrolled Component</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' ref={inputRef}></input><br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
