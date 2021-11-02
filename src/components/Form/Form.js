import { useState } from "react";

const Form = () => {
  const [text, setText] = useState("");

  const sendForm = (event) => {
    event.preventDefault();
  };

  const changeValue = (event) => {
    setText(event.target.value);
  };

  return (
    <form
      className="form__todo"
      onSubmit={sendForm}
      autoComplete="off"
      noValidate
    >
      <input
        className="form__text"
        type="text"
        value={text}
        onChange={changeValue}
        placeholder="Insert the task to do..."
        required
      />
      <button className="form__button">Add to list</button>
    </form>
  );
};

export default Form;
