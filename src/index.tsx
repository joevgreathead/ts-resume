import React from "react";
import { hydrate, render } from "react-dom";
import "./index.css";
import "normalize.css";
import { Resume } from "./resume";

const rootElement = document.getElementById("root");
if (rootElement?.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <Resume />
    </React.StrictMode>,
    document.getElementById("root")
  );
} else {
  render(
    <React.StrictMode>
      <Resume />
    </React.StrictMode>,
    document.getElementById("root")
  );
}
