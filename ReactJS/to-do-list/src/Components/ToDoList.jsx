import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ({ todos, editToDo, removeTodo }) => {
    // console.log(todos);
    return (
        <div className="tasks-container">
            <h2>Tasks:</h2>
            <div className="task-list">
                {todos.map((todo, index) => (
                    <ToDoItem key={index}
                        index={index}
                        todo={todo}
                        editToDo={editToDo}
                        removeTodo={removeTodo}
                    />
                ))}
            </div>
        </div>
    )
}

export default ToDoList