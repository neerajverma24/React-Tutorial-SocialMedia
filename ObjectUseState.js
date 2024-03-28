import React, { useState } from 'react'

export default function ObjectUseState() {
    const [car, setCar] = useState({
        company: "Mahindra",
        model: "Scorpio",
        year: "2023",
        color: "White"
    })

    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color: "Mate-Black" }
        })
    }
    return (
        <div>
            <h1 style={{ color: "red" }}>useState with Object</h1>
            <p>My fav car is {car.company} <i>{car.model}</i>. It is a <b>{car.color}</b> from {car.year}. </p>
            <button onClick={updateColor}>Click to change the <strong>Color</strong></button>
        </div>
    )
}
