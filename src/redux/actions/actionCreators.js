import actionTypes from "./actionTypes";

export const loadTasksAction = (tasks) => ({
  type: actionTypes.loadTasks,
  tasks,
});

export const createTask = (task) => ({
  type: actionTypes.createTask,
  task,
});

export const updateTask = (task) => ({
  type: actionTypes.updateTask,
  task,
});

export const deleteTask = (id) => ({
  type: actionTypes.deleteTask,
  id,
});

export const toggleTask = (id) => ({
  type: actionTypes.toggleTask,
  id,
});
