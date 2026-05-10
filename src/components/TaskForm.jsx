import { useState, useEffect, useRef } from "react";

function TaskForm({ addTask, editTask, updateTask }) {
  const [task, setTask] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    if (editTask) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTask(editTask.title);

      inputRef.current.focus();
    }
  }, [editTask]);
 const handleSubmit = (e) => {
  e.preventDefault();

  if (!task.trim()) return;

  if (editTask) {
    updateTask({
      ...editTask,
      title: task,
    });
  } else {
    addTask(task);
  }

  setTask("");
};

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
      <input
        type="text"
        ref={inputRef}
        name="task"
        id="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2
bg-slate-100 dark:bg-gray-700
text-black dark:text-white
placeholder-gray-400 dark:placeholder-gray-300
focus:outline-none focus:ring-2 focus:ring-blue-500
"
      />

      <button type="submit" className="btn bg-blue-500 hover:bg-blue-600">
        {editTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}

export default TaskForm;
