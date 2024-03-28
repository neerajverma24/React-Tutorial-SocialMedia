import React from 'react'

export default function EventObjPara() {

    const handleInputChange = (event) => {
        // console.log("Button Click!")
        console.log(event.target.value)
    }

    return (
        <div>
            <h2>Event Object and Parameters..</h2>
            <input type='text' onChange={handleInputChange}></input>
        </div>
    )
}
