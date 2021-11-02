const Task = ({ taskData: { text, isChecked } }) => {
  const updateTask = () => {};
  const deleteTask = () => {};

  return (
    <li className="todo__task">
      <p>{text}</p>
      <input className="todo__checkbox" type="checkbox" checked={isChecked} />
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
