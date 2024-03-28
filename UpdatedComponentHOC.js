import React, { useState } from "react";

function UpdatedComponentHOC(OriginalComponent) {
    function NewComponent() {
        const [cost, setCost] = useState(10);

        let costHandler = () => {
            setCost(cost + 10);
        };

        return (
            <OriginalComponent costHandler={costHandler} cost={cost} />
        )
    }

    return NewComponent;
}

export default UpdatedComponentHOC;