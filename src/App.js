import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./App.css";
import Form from "./components/Form/Form";
import Task from "./components/Task/Task";
import { loadTasksThunk } from "./redux/thunk/tasksThunks";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector(({ tasks }) => tasks);

  useEffect(() => {
    dispatch(loadTasksThunk());
  }, [dispatch]);

  return (
    <>
      <h1>TODO List</h1>
      <Form />
      <div className="form__separator" />
      <ul className="container__task">
        {tasks.map((task) => (
          <Task taskData={task} />
        ))}
      </ul>
    </>
  );
}

export default App;
