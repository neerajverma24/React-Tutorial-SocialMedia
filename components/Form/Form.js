import React, { useState } from 'react'

export default function Form() {
    const [formData, setFormData] = useState({})

    const handleChange = (event) => {
        setFormData(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
    }

    return (
        <div>
            <h2>Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name :
                    <input type='text' name='name' value={formData.name || ''} onChange={handleChange} />
                </label><br />
                <label>
                    Email :
                    <input type='email' name='email' value={formData.email || ''} onChange={handleChange} />
                </label><br />
                <button type='submit'>Submits</button>
            </form>
        </div>
    )
}
