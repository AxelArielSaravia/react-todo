import * as React from "react";
import {createRoot} from "react-dom/client";

import App from "./components/app.jsx";

import "./context.js";

const container = document.getElementById("root");
if (container !== null) {
    const root = createRoot(container);
    root.render(<App />);
}

