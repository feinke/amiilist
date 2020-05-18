import { createStore, applyMiddleware } from "redux";
import { reducers } from "./reducers";
import thunkMiddleware from "redux-thunk";

const configureStore = () => {
  return createStore(reducers, applyMiddleware(thunkMiddleware));
}

export default configureStore;