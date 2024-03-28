// This file is just a basic example , The code is not working in this....
import React, { useState } from "react";

function ControlledComponent() {
    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value)
    }


    return (
        <>
            <h1>Controlled Component</h1>
            <label>Name : </label><br />
            <input type="text" value={name} onChange={handleChange}></input><br />
            <button type="submit">Submit</button>
        </>
    )
}

export default ControlledComponent;