import "./App.css";
import Form from "./components/Form/Form";

function App() {
  return (
    <>
      <h1>TODO List</h1>
      <Form />
      <div className="form__separator" />
      <ul className="container__task">
        {/* {tasks.map((task) => (
        <Task taskData={task} updateTask={updateTask} deleteTask={deleteTask} />
      ))} */}
      </ul>
    </>
  );
}

export default App;
