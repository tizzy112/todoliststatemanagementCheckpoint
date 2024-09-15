import React from "react";
import "../App.css";

const TaskItem = ({ task, onEdit, onDelete, onToggleComplete }) => {
  return (
    <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      <span>
        {task.name}: {task.description}
      </span>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <button onClick={() => onToggleComplete(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>
    </li>
  );
};

export default TaskItem;
