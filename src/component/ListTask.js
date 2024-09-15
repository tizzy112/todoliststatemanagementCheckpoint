import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTask, deleteTask, editTask } from "../redux/tasksSlice";
import Task from "./Task";

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [filter, setFilter] = React.useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") return task.isDone;
    if (filter === "not_done") return !task.isDone;
    return true; // 'all'
  });

  return (
    <div>
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("done")}>Done</button>
        <button onClick={() => setFilter("not_done")}>Not Done</button>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggle={() => dispatch(toggleTask(task.id))}
            onDelete={() => dispatch(deleteTask(task.id))}
            onEdit={(description) =>
              dispatch(editTask({ id: task.id, description }))
            }
          />
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
