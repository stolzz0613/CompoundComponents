import React from 'react'

const Input = ({ onChange }) => {
    return (
        <input type='text' onChange={e => onChange(e.target.value)}/>
    )
}

export default Input;