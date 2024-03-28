import React from "react";
import ChildPropDril from "./ChildPropDril";
function ParentPropDril({ counter }) {
    return (
        <div style={{ border: "2px solid green" }}>
            <h2>Parent Prop Dril</h2>

            {/* Passing PROPS to CHILD */}
            <ChildPropDril counter={counter} />
        </div>
    )
}

export default ParentPropDril;