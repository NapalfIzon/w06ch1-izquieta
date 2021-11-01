const Task = (toDoTask) => {
  const onUpdate = () => {};

  const onDelete = () => {};

  return (
    <li className="todo__task">
      <p>{toDoTask.text}</p>
      <input
        className="todo__checkbox"
        type="checkbox"
        checked={toDoTask.checked}
      />
      <button className="todo__update" onClick={onUpdate}>
        update
      </button>
      <button className="todo__delete" onClick={onDelete}>
        delete
      </button>
    </li>
  );
};

export default Task;
