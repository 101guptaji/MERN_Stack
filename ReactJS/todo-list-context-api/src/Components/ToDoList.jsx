import React, {useContext} from 'react'
import ToDoItem from './ToDoItem'
import { TodoContext } from '../App';

const ToDoList = () => {
    const { todos, editToDo, removeTodo } = useContext(TodoContext);
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