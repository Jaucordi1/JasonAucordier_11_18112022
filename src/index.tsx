import "./index.sass";
import ReactDOM        from "react-dom/client";
import React           from "react";
import {Router}        from "./Router";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
if (container) {
  ReactDOM
      .createRoot(container)
      .render(
          <React.StrictMode>
            <Router />
          </React.StrictMode>
      );
}

reportWebVitals();
