import React from 'react';
import { TodoProvider } from './context/TodoContext';
import TodoCounter from './containers/TodoCounter';
import TodoSearch from './containers/TodoSearch';
import TodoList from './containers/TodoList';
import TodoItem from './containers/TodoItem';
import TodosLoading from './containers/TodosLoading';
import TodosError from './containers/TodosError';
import EmptyTodos from './containers/EmptyTodos';
import CreateTodoButton from './containers/CreateTodoButton';
import { TodoContext } from './context/TodoContext';


function App() {  

  return (

    <TodoProvider>

      <TodoCounter />
      <TodoSearch  />
      
      <TodoContext.Consumer>
        {({
          loading,
          error,
          searchedTodos,
          completeTodo,
          deleteTodo,      
        }) => (
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
        )}
      </TodoContext.Consumer> 

      <CreateTodoButton />
      
    </TodoProvider>
  );
};

export default App;

