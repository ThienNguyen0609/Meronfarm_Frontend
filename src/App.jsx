import Router from "./routes/Router";
import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
