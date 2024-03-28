import React from 'react'

export default function GrandChildPropDril({ counter }) {
    return (
        <div style={{ border: "2px solid black" }}>
            {/* Displaying PROP value here */}
            <h2>GrandChild Prop : {counter}</h2>

            <p><b>Explanation : </b>Here, count is sending from the App Component to the Parent Component to the Child Component , then at last it will sended to the GrandChild Component....  As we increase the count, the count of  GrandChild also increase , this is because of the <b><i>PROP DRILLING...</i></b></p>
        </div>
    )
}
