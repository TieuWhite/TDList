import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState(["Eat", "Swim"]);
  const [newTask, setNewTask] = useState("");

  function HandleInputChange(e) {
    setNewTask(e.target.value);
  }

  function AddTask(e) {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function DeleteTask(index) {
    const updatedTask = task.filter((_, i) => i !== index);
    setTask(updatedTask);
  }

  return (
    <>
      <form className="new-item-form">
        <div>
          <h1 htmlFor="new-item" className="new-item-header">
            New Item
          </h1>
          <input
            type="text"
            className="input-box"
            placeholder="Activity"
            onChange={HandleInputChange}
          />
        </div>
        <button className="add-btn" onClick={AddTask}>
          Add
        </button>
      </form>
      <h1 className="to-do-header">To do list:</h1>
      <ul>
        {task.map((task, index) => (
          <li key={index}>
            <span className="task-name">{task}</span>
            <button className="delete-btn" onClick={() => DeleteTask(index)}>
              Del
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
