import React from "react";
import { ConnectedRouter } from "./Router";
import { Provider } from "react-redux";
import configureStore from "./store";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <ConnectedRouter />
      </div>
    </Provider>
  );
}

export default App;
