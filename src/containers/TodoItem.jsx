import React from 'react';
import CompleteIcon from '../containers/CompleteIcon';
import DeleteIcon from '../containers/DeleteIcon';
import '../styles/TodoItem.css';

const TodoItem = (props) => {
    return (
        <li className="TodoItem">
            <CompleteIcon 
                completed={props.completed}
                onComplete={props.onComplete}
            />

            <p className={`TodoItem-p
            ${props.completed && "TodoItem-p--complete"}`}>
                {props.text}
            </p>
        
            <DeleteIcon 
                onDelete={props.onDelete}
            />
        </li>
    );
}

export default TodoItem;