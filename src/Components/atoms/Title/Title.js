import React from 'react'

export default function Title({ text, ...restProps }) {
    return (
        <h1 {...restProps}>{text}</h1>
    )
}
