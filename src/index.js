import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./components/App";
import store from "./redux/configureStore";
import { Provider } from "react-redux";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

root.render(
  // now the entire app is wrapped in the Provider component, which makes the Redux store available to any nested components that need to access the Redux store
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
