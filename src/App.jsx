import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
  const taskObject = {
    id: Date.now(),
    title: newTask,
    completed: false,
  };
console.log(taskObject)
  setTasks([...tasks, taskObject]);
};

  return (
    <div>
      <h1>Task Manager</h1>

      <TaskForm addTask={addTask} />
      
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;