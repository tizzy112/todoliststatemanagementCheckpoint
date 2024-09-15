import React, { useState } from "react";

const Task = ({ task, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (newDescription.trim()) {
      onEdit(newDescription);
      setIsEditing(false);
    }
  };

  return (
    <li>
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <span
            style={{
              textDecoration: task.isDone ? "line-through" : "none",
              marginRight: "10px",
            }}
          >
            {task.description}
          </span>
          <button onClick={onToggle}>
            {task.isDone ? "Undo" : "Complete"}
          </button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </>
      )}
    </li>
  );
};

export default Task;
