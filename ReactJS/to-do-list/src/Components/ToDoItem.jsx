import React, { useState } from 'react'


const ToDoItem = ({ index, todo, editToDo, removeTodo }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editText, setEditText] = useState(todo)

    const handleEdit = () => {
        setEditText(todo)
        if (isEditing) {
            editToDo(index, editText)
        }
        setIsEditing(!isEditing)
    }

    return (
        <div className="task">
            <div className="content">
                {isEditing ? (
                    <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
                ) : (
                    <input type="text" value={todo} readOnly />
                )}
            </div>
            <div className="actions">
                <button className="btn edit" onClick={handleEdit}>
                    {isEditing ? "Save" : "Edit"}
                </button>
                <button className="btn remove" onClick={() => removeTodo(index)}>
                    Remove
                </button>
            </div>
        </div>
    )
}

export default ToDoItem