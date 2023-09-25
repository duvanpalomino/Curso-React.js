import React from 'react';
import TodoCounter from './containers/TodoCounter';
import TodoSearch from './containers/TodoSearch';
import TodoList from './containers/TodoList';
import TodoItem from './containers/TodoItem';
import CreateTodoButton from './containers/CreateTodoButton';
import useLocalStorage from './Hooks/useLocalStorage';

// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'Lalalalallala', completed: false },
//   { text: 'Usar estados derivados', completed: true }
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));


function App() {  

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex( 
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex( 
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <>

      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
        searchValue = {searchValue}
        setSearchValue={setSearchValue} 
      />

      <TodoList>
        {loading && <p>Estamos cargando...</p>}
        {error && <p>Desesperate, Hubo un error!!</p>}
        {(!loading && searchedTodos.length === 0 ) && <p>Crea tu primer TODO!</p>}

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
      
    </>
  );
};

export default App;

