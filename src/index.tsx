import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import AppRoutes from "./Routes/AppRoutes";
import { COLOR } from "./Color.palette";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <div color={COLOR.PrimaryFont}>
    <Router>
      <AppRoutes />
    </Router>
    </div>
  </React.StrictMode>
);
