import React from "react";

class EventBinding2 extends React.Component {
    handleClick = () => {
        console.log("Arrow Function in class is working...")
    }
    render() {
        return (
            <>
                <h1>Arrow function in Class Property</h1>
                <button onClick={this.handleClick}>Click Me!</button>
            </>
        )
    }
}

export default EventBinding2;