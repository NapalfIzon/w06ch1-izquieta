import { combineReducers } from "redux";
import tasksReducer from "./taskListReducer";

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export default rootReducer;
