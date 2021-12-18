import React from 'react'

export default function Item({ text, selected, color='red'}) {
    return (
        <p style={{ color: `${selected ? color : 'black'}` }}>{text}</p>
    )
}
