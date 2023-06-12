import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { createStore } from "redux";
import { rootReducer } from "./redux/rootReducer";

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
