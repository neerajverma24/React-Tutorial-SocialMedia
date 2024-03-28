import React, { useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

const Items = () => {
    const [value, setValue] = useState('')

    const { setItem, getItem, deleteItem } = useLocalStorage("Neeraj")
    return (
        <div>
            <h2>Items used in Local Storage</h2>
            <div>
                <input type='text' onChange={(e) => setValue(e.target.value)} />
            </div>
            <div>
                <button onClick={() => setItem(value)}>Set</button>
                <button onClick={getItem}>Get</button>
                <button onClick={deleteItem}>Delete</button>
            </div>
            <h2>{getItem}</h2>
        </div>
    )
}

export default Items
