/*
  Todo List App

  Topic: State Management, Props, and Event Handling

  Requirements:
    Create a Todo List App with input field, add button, and list of todos.
    Implement add, remove, and edit functionality.
    Use state to store todos and props to pass data between components
*/
import { useState } from 'react'
import './App.css';
import ToDoForm from './Components/ToDoForm';
import ToDoList from './Components/ToDoList';

function App() {
  let [todos, setTodos] = useState([]);

  const addToDo = (inputTask) => {
    setTodos([...todos, inputTask]);
  }

  const editToDo = (index, newInput) => {
    setTodos(todos.map((todo, i) => (i === index ? newInput : todo)))
    // console.log(todos);
  }

  const removeTodo = (index) => {
    todos = todos.filter((todo, i) => i !== index);
    setTodos(todos);
    // console.log(todos);
  }

  return (
    <div className='container'>
      <h1>TO DO List</h1>
      <ToDoForm addToDo={addToDo} />
      <ToDoList todos={todos} editToDo={editToDo} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
