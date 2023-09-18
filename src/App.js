import React from 'react';
import TodoCounter from './containers/TodoCounter';
import TodoSearch from './containers/TodoSearch';
import TodoList from './containers/TodoList';
import TodoItem from './containers/TodoItem';
import CreateTodoButton from './containers/CreateTodoButton';


const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'Lalalalallala', completed: false },
]

function App() {
  return (
    <>

      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        { defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            />
        )) }
      </TodoList>
      
      <CreateTodoButton />
      
    </>
  );
};

export default App;

