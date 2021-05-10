import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const path = process.env.PUBLIC_URL || "/tereda-pustaka"

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter basename={}>
      <App />
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
