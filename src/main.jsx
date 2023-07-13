import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppProvider } from "./store/AppContext.jsx";

const initialState = {
  activeProduct: {},
  type: "",
  cart: [],
  products: [],
  notificationsQueue: [],
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider initialState={initialState}>
      <App />
    </AppProvider>
  </React.StrictMode>
);
