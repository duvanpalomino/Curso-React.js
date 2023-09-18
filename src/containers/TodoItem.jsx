import React from 'react';
import '../styles/TodoItem.css';

const TodoItem = (props) => {
    return (
        <li className='TodoItem'>
            <span className={`Icon Icon-check 
            ${props.completed && 'Icon-check--active'}`}>
                V
            </span>
            <p className={`TodoItem-p
            TodoItem-p--complete`}>
                {props.text}
            </p>
            <span className='Icon Icon-delete'>
                X
            </span>
        </li>
    );
}

export default TodoItem;