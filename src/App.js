import React from 'react';
import TodoCounter from './containers/TodoCounter';
import TodoSearch from './containers/TodoSearch';
import TodoList from './containers/TodoList';
import TodoItem from './containers/TodoItem';
import TodosLoading from './containers/TodosLoading';
import TodosError from './containers/TodosError';
import EmptyTodos from './containers/EmptyTodos';
import CreateTodoButton from './containers/CreateTodoButton';
import { TodoContext } from './context/TodoContext';
import Modal from './containers/Modal';
import TodoForm from './containers/TodoForm';


function App() {  

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    // setOpenModal,      
  } = React.useContext(TodoContext);

  return (

    <>

      <TodoCounter />
      <TodoSearch  />
    
      <TodoList>
        {loading && 
          <>
            < TodosLoading />
            < TodosLoading />
            < TodosLoading />
          </>
        }
        {error && < TodosError />}
        {(!loading && searchedTodos.length === 0 ) && < EmptyTodos />}

        { searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo (todo.text)}
            onDelete={() => deleteTodo (todo.text)}
            />
        )) }
      </TodoList>
      
      <CreateTodoButton />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      
    </>
  );
};

export default App;

