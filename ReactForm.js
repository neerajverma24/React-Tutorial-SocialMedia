import React, { useState } from "react";

function ReactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name : ", name);
        console.log("Email", email);
    }

    return (
        <>
            <h1>React Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name : </label><br />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input> <br />
                <label>Email : </label><br />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input> <br />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default ReactForm;