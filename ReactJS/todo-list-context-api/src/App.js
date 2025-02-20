/*
  Todo List App with Context API

  Topic: Context API, State Management

  Requirements:
    Create a Todo List App using Context API for state management.
    Implement add, remove, and edit functionality.
    
*/
import { useState, createContext } from 'react'
import './App.css';
import ToDoForm from './Components/ToDoForm';
import ToDoList from './Components/ToDoList';

export const TodoContext = createContext();

function App() {
  let [todos, setTodos] = useState([]);

  const addToDo = (inputTask) => {
    setTodos([...todos, inputTask]);
  }

  const editToDo = (index, newInput) => {
    setTodos(todos.map((todo, i) => (i === index ? newInput : todo)))
  }

  const removeTodo = (index) => {
    todos = todos.filter((todo, i) => i !== index);
    setTodos(todos);
  }

  return (
    <div className='container'>
      <h1>TO DO List</h1>
      <TodoContext.Provider value={{ todos, addToDo, editToDo, removeTodo }}>
        <ToDoForm />
        <ToDoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
