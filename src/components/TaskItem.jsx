function TaskItem({ task, deleteTask, toggleTaskStatus, handleEditTask }) {
  return (
    <div
      className="
flex items-center justify-between
bg-slate-200 dark:bg-gray-700
p-4 rounded-xl shadow-sm"
    >
      <p
        className={`text-lg text-black dark:text-white ${
          task.completed ? "line-through opacity-50" : ""
        }`}
      >
        {task.title}
      </p>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-black dark:text-white">
          {task.completed ? "Completed" : "Pending"}
        </span>

        <button
          onClick={() => toggleTaskStatus(task.id)}
          className="btn bg-green-500 hover:bg-green-600"
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => handleEditTask(task)}
          className="btn bg-yellow-500 hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="btn bg-red-500 hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
