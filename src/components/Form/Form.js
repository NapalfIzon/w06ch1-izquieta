const Form = () => {
  const sendForm = (event) => {
    event.preventDefault();
  };

  const changeValue = () => {};

  // const isDisabled = () => {
  //   return "";
  // };

  return (
    <form className="form__todo" onSubmit={sendForm} autoComplete="off">
      <input
        className="form__text"
        type="text"
        value=""
        onChange={changeValue}
        placeholder="Insert the task to do..."
        required
      />
      <button className="form__button" disabled="{isDisabled}">
        Add to list
      </button>
    </form>
  );
};

export default Form;
