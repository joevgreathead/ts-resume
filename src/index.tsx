import { h, hydrate, render } from "preact";
import "./index.css";
import { Resume } from "./resume";

const rootElement = document.getElementById("root");
if (rootElement?.hasChildNodes()) {
  hydrate(<Resume />, document.getElementById("root")!);
} else {
  render(<Resume />, document.getElementById("root")!);
}
