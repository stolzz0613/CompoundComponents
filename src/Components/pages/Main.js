import React, { useContext, useState } from 'react';
import { List, Empty, Header, SearchBar} from '..';
import { ListContext, ListProvider } from '../../Context';

export default function Main() {
    const { listNames, nameSelected, selectName } = useContext(ListContext);
    const [searchedName, setsearchedName] = useState('');

    const saveName = () => {
        if (listNames.indexOf(searchedName) !== -1 ) {
            selectName(listNames.indexOf(searchedName));
        } else {
            selectName(-1);
        };
    }

    return (
        <ListProvider>
            <Header
                title='APLICACION'
                onFound={(name) => <h2>{`El nombre encontrado es: ${name}`}</h2>}
                onNotFound={() => <h2>No se encontro ningun nombre</h2>}
                nameSelected={listNames[nameSelected]}
            >
                <SearchBar>
                    <SearchBar.Title>BARRA DE BUSQUEDA</SearchBar.Title>
                    <SearchBar.Input storage={setsearchedName} />
                    <SearchBar.Button action={saveName} label='BUSCAR AHORA' />
                </SearchBar>
            </Header>
            <List
                onEmpty={() => <Empty />}
                list={listNames}
            >
                <List.Title color='red'>LISTA #1</List.Title>
                {
                    listNames.map(e => <List.Item
                        selected={listNames[nameSelected] === e}
                        text={e}
                        color='green'
                        key={e}
                        />
                    )
                }
            </List>
        </ListProvider>
    )
}
