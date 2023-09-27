import React from 'react';
import { TodoContext } from '../context/TodoContext';
import '../styles/CreateTodoButton.css';

const CreateTodoButton = () => {

    const { 
        openModal,
        setOpenModal, 
    } = React.useContext(TodoContext);

    return (
        <button className="CreateTodoButton"
        onClick={() => {setOpenModal(!openModal)}
        }>
            +
        </button>
    );
}

export default CreateTodoButton;