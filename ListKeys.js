import React from 'react'

export default function ListKeys() {
    const items = ["Apple", "Banana", "Oranges"];

    const listItems = items.map((item) =>
        <li key={item}>{item}</li>
    )

    // console.log(listItems[2]);

    return (
        <div>
            <h1>List and Keys</h1>
            <ul>
                {listItems}
            </ul>
        </div>
    )
};
