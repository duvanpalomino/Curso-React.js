import React from 'react';
import { TodoContext } from '../context/TodoContext';
import '../styles/TodoSearch.css';

const TodoSearch = () => {
    
    const {
        searchValue,
        setSearchValue, 
    } = React.useContext(TodoContext);

    return (
        <input 
            placeholder="Cortar cebolla" 
            className='TodoSearch'
            value={searchValue} 
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    );
}

export default TodoSearch;