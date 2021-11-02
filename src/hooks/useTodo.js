import { useDispatch, useSelector } from "react-redux";

const useTodo = () => {
  const tasks = useSelector(({ tasks }) => tasks);
  const dispatch = useDispatch();

  const loadTasks = useCallback(() => {
    dispatch(loadTodoThunk());
  }, [dispatch]);
};

export default useTodo;

// import { useDispatch, useSelector } from "react-redux";
// import {
//   loadToDosThunk,
//   createToDoThunk,
//   deleteToDoThunk,
// } from "../redux/thunks/tasksThunks";
// import { useCallback } from "react";

// const useToDos = () => {
//   const tasks = useSelector(({ tasks }) => tasks); //reducer
//   const dispatch = useDispatch();

//   const loadTasks = useCallback(() => {
//     dispatch(loadToDosThunk());
//   }, [dispatch]);

//   const createTask = useCallback(
//     (task) => {
//       dispatch(createToDoThunk(task));
//     },
//     [dispatch]
//   );

//   const deleteTask = useCallback(
//     (id) => {
//       dispatch(deleteToDoThunk(id));
//     },
//     [dispatch]
//   );

//   return {
//     tasks,
//     loadTasks,
//     createTask,
//     deleteTask,
//   };
// };
