const todoThunk = async (dispatch) => {
  const response = await fetch();
  const todoList = await response.json();
  dispatch();
};

export const loadTodoThunk = () => async (dispatch) => {
  const response = await fetch("https://w06ch1-todo-api.herokuapp.com/todo");
  const todoList = await response.json();
  dispatch(loadToDosAction(todoList));
};

export default todoThunk;
