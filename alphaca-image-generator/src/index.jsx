import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import features from "./alphaca-features.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App features={features} />
  </React.StrictMode>
);
