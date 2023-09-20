import React from 'react';
import '../styles/TodoCounter.css';

const TodoCounter = ({ total, completed }) => {
    return (

        completed === total ?

        <h1 className='TodoCounter'>
            Felicidades, completaste todas las tareas!!
        </h1>

        :

        <h1 className="TodoCounter">
            Has completado <span>{completed}
            </span> de <span>{total}</span> TODOS
        </h1> 
        
    );
}

export default TodoCounter;