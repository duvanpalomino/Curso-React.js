import React from 'react';
import '../styles/CreateTodoButton.css';

const CreateTodoButton = () => {
    return (
        <button className="CreateTodoButton"
        onClick={
            (event) => {
                console.log('le diste click');
                console.log(event);
                console.log(event.target);
            }
        }>
            +
        </button>
    );
}

export default CreateTodoButton;