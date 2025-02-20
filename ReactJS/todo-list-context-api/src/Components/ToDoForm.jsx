import React, { useState, useContext } from 'react';
import { TodoContext } from '../App';

const ToDoForm = () => {
    const {addToDo} = useContext(TodoContext);
    
    const [inputTask, setInputTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputTask.trim()) {
            addToDo(inputTask)
            setInputTask("")
        }
    }

    return (
        <form id="taskForm" onSubmit={handleSubmit}>
            <div className="row">
                <label className="form-label">Add Task:</label>
                <input type="text" placeholder="Enter task you want to perform.."
                    value={inputTask}
                    onChange={(e) => setInputTask(e.target.value)} />
            </div>

            <div className="submit-button">
                <input type="submit" value="Add" />
            </div>
        </form>
    )
}

export default ToDoForm