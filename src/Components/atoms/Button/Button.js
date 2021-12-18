import React from 'react'

const Button = ({label, onAction}) => {
    return (
        <button onClick={onAction}>{label}</button>
    )
}

export default Button;
