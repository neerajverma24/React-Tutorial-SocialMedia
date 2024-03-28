import React from "react";

class EventBinding3 extends React.Component {
    handleClick() {
        console.log("Bindling Inline is working...")
    }
    render() {
        return (
            <>
                <h1>Binding Inline with Arrow function</h1>
                <button onClick={() => this.handleClick()}>Click Me!</button>
            </>
        )
    }
}

export default EventBinding3;