import React from 'react'

export default function Header({ nameSelected, onFound, onNotFound, children}) {
    return (
        <div>
            {children}
            {
                nameSelected !== -1
                    ? onFound(nameSelected)
                    : onNotFound()
            }
        </div>
    )
}

