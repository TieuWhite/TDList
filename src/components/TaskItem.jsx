import React from "react";

function TaskItem({ task, removeTask, setTaskStatus }) {
  return (
    <>
      <li key={task.id} className={task.status ? "done" : ""}>
        <span className="label">{task.title}</span>
        <div className="action">
          <input
            type="checkbox"
            className="btn-action btn-action-done"
            checked={Boolean(task.status)}
            onChange={(e) => setTaskStatus(task.id, e.target.checked)}
          />
          <button
            onClick={() => removeTask(task.id)}
            className="btn-action btn-action-delete"
          >
            ✘
          </button>
        </div>
      </li>
    </>
  );
}

export default TaskItem;
