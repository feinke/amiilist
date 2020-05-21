import { createStore, applyMiddleware } from "redux";
import { reducers, rootEpic } from "./reducers";
import thunkMiddleware from "redux-thunk";
import { createEpicMiddleware } from "redux-observable";

const epicMiddleware = createEpicMiddleware();

const configureStore = () => {
  const store = createStore(
    reducers,
    applyMiddleware(thunkMiddleware, epicMiddleware)
  );
  epicMiddleware.run(rootEpic);
  return store;
};

export default configureStore;