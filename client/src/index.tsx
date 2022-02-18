import React from "react";
import { render } from "react-dom";
import "./index.css";
import "normalize.css";
import { Resume } from "./resume";

render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>,
  document.getElementById("root")
);
