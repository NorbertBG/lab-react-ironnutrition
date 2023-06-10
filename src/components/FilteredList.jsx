import { React, useState } from 'react'
import foods from "./foods.json";

function List(props) {
    return (
        <ul>
            {foods.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default List