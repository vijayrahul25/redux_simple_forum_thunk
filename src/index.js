import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import reducer from "./reducers/Allreducer";
import createLogger from "redux-logger";
import { BrowserRouter } from "react-router-dom";
import { loadUsers } from "./actions/userActions";
import thunk from "redux-thunk";

//const store = createStore(reducer, applyMiddleware(createLogger));

const store = createStore(reducer, applyMiddleware(thunk));
//store.dispatch(loadUsers());
render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
