const Task = (tasks, updateTask, deleteTask) => {
  return (
    <li className="todo__task">
      <p>{tasks.text}</p>
      <input
        className="todo__checkbox"
        type="checkbox"
        checked={tasks.isChecked}
      />
      <button className="todo__update" onClick={updateTask}>
        update
      </button>
      <button className="todo__delete" onClick={deleteTask}>
        delete
      </button>
    </li>
  );
};

export default Task;
