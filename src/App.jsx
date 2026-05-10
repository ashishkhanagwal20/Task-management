import { useState } from "react";
import { useTheme } from "./context/ThemeContext";
import { useTasks } from "./hooks/useTasks";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const { darkMode, setDarkMode } = useTheme();

  const { tasks, addTask, deleteTask, toggleTaskStatus, updateTask } =
    useTasks();

  const [filter, setFilter] = useState("all");
  const [editTask, setEditTask] = useState(null);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    }

    if (filter === "pending") {
      return !task.completed;
    }

    return true;
  });

  const handleEditTask = (task) => {
    setEditTask(task);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
        <div className="max-w-2xl mx-auto bg-slate-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h1 className="text-4xl font-bold mb-6 text-center text-black dark:text-white">
            Task Manager
          </h1>

          <div className="flex justify-end mb-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="
                px-4 py-2 rounded-lg font-medium transition-all duration-300
                bg-slate-300 hover:bg-slate-400
                dark:bg-slate-700 dark:hover:bg-slate-600
              "
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>

          <TaskForm
            addTask={addTask}
            editTask={editTask}
            updateTask={(updatedTask) => {
              updateTask(updatedTask);
              setEditTask(null);
            }}
          />

          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setFilter("all")}
              className={`btn ${
                filter === "all"
                  ? "bg-blue-600"
                  : "bg-gray-500 hover:bg-gray-600"
              }`}
            >
              All
            </button>

            <button
              onClick={() => setFilter("completed")}
              className={`btn ${
                filter === "completed"
                  ? "bg-blue-600"
                  : "bg-gray-500 hover:bg-gray-600"
              }`}
            >
              Completed
            </button>

            <button
              onClick={() => setFilter("pending")}
              className={`btn ${
                filter === "pending"
                  ? "bg-blue-600"
                  : "bg-gray-500 hover:bg-gray-600"
              }`}
            >
              Pending
            </button>
          </div>

          <TaskList
            tasks={filteredTasks}
            deleteTask={deleteTask}
            toggleTaskStatus={toggleTaskStatus}
            handleEditTask={handleEditTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
