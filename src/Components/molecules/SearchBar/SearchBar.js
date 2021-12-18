import React from 'react'
import { Title, Button, Input } from '../..'

export default function SearchBar({ children }) {
    return (
        <div>
            {children}
        </div>
    )
}

SearchBar.Title = function SearchBarTitle({ children }) {
    return (
        <Title text={children}/>
    )
}

SearchBar.Button = function SearchBarButton({ action, label }) {
    return (
        <Button onAction={action} label={label}/>
    );
}

SearchBar.Input = function SearchBarInput({storage}) {
    return (
        <Input onChange={storage}/>
    );
}