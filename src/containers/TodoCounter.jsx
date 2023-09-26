import React from 'react';
import { TodoContext } from '../context/TodoContext';
import '../styles/TodoCounter.css';

const TodoCounter = () => {
    
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext);
    
    return (

        completedTodos === totalTodos ?

        <h1 className='TodoCounter'>
            Felicidades, completaste todas las tareas!!
        </h1>

        :

        <h1 className="TodoCounter">
            Has completado <span>{completedTodos}</span>
            de <span>{totalTodos}</span> TODOS
        </h1> 
        
    );
}

export default TodoCounter;