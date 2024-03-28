import React from "react";

class EventBinding extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("Event Binding is working...");
    }
    render() {
        return (
            <>
                <h2>Binding in Constructor</h2>
                <button onClick={this.handleClick}>Click Me!</button>
            </>
        )
    }
}

export default EventBinding;