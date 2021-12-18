import React, { useState } from 'react';

const ListContext = React.createContext();

function ListProvider(props) {
    const [listNames, setlistNames] = useState(['Andres', 'David', 'Santiago', 'Carlos']);
    const [nameSelected, setnameSelected] = useState('');

    const addName = (name) => {
        const newNames = [...listNames];
        newNames.push(name);
        setlistNames(newNames);
    };

    const selectName = (name) => {
        setnameSelected(name)
    }

    return (
        <ListContext.Provider value={{
            addName,
            selectName,
            listNames,
            nameSelected,
        }}>
            {props.children}
        </ListContext.Provider>
    );
}

export { ListContext, ListProvider };
