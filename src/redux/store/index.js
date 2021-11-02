import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const configureStore = (initialValue) => {
  return createStore(
    rootReducer,
    initialValue,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export default configureStore;
