import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddForm from "./components/AddForm";

function App() {
  const [tasks, setTasks] = useState([
    { id: "task-1", title: "Learn JS", status: 1 },
    { id: "task-2", title: "Do something", status: 0 },
  ]);
  const [showIncomplete, setShowIncomplete] = useState(false);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: 0,
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const setTaskStatus = (taskId, status) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: status ? 1 : 0 };
        }
        return task;
      })
    );
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <>
      <div className="container">
        <Header />
        <TaskList
          tasks={tasks}
          showIncomplete={showIncomplete}
          setTaskStatus={setTaskStatus}
          removeTask={removeTask}
          setShowIncomplete={setShowIncomplete}
        />
        <AddForm
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          newTask={newTask}
        />
      </div>
    </>
  );
}

export default App;
