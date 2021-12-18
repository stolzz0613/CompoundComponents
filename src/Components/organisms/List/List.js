import React from 'react'
import { Title, Item } from '../..';

export default function List({ children }) {
    return (
        <div>
            {children}
        </div>
    )
}

List.Item = function ListItem({ selected, text, color }) {
    return (
        <Item selected={selected} text={text} color={color} />
    )
}

List.Title = function ListTitle({ children, color='black', size='40px' }) {
    return (
        <Title text={children} style={{ color: color, fontSize: size }} />
    )
}
