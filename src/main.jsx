import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./app/store.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ContextProvider } from "./components/context/Contextdata.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ContextProvider>
  </React.StrictMode>
);
