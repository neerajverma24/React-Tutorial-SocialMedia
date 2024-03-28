import React from 'react'

export default function GroceryList() {

    const items = [
        { id: 1, name: "Bread" },
        { id: 2, name: "Milk" },
        { id: 3, name: "Gem" },
    ]
    return (
        <div>
            <h2>Grocery List</h2>

            <ul>
                {/* {items.map(() => <li key>{items.id}{items.name}</li>)}        wrong*/}
                {items.map((item) => <li key={item.id}>{item.name}</li>)}
            </ul>

        </div>
    )
}
