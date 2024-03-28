import React from 'react'

const products = [
    { name: "Potato", isFruits: false, id: 1 },
    { name: "Garlic", isFruits: false, id: 2 },
    { name: "Grapes", isFruits: true, id: 3 },
    { name: "Mango", isFruits: true, id: 4 }
]
function RenderingList() {

    const renderList = products.map(list =>
        <li key={list.id}
            style={{
                color: list.isFruits ? "magenta" : "darkgreen"
            }}
        >
            {list.name}
        </li>
    )
    return (
        <div>
            <h1>RenderingList</h1>
            <p>Here, what we are doing is, using conditional rendering..</p>
            <ul>{renderList}</ul>
        </div>
    )
}

export default RenderingList
