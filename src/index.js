import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Effect } from "./useEffect";
import { Callback } from "./useCallback";
import reportWebVitals from "./reportWebVitals";
import Memo from "./useMemo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Memo />
  </React.StrictMode>
);

reportWebVitals();
