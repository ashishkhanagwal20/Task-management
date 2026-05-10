import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, toggleTaskStatus, handleEditTask }) {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTaskStatus={toggleTaskStatus}
          handleEditTask={handleEditTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
