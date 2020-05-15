import React from "react";
import Router from "./Router";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducers } from "./reducers";

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
