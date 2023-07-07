import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./components/app.jsx";

import "./context.js";

const container = document.getElementById("root");
if (container !== null) {
    const root = ReactDOM.createRoot(container);
    root.render(<App />);
} else {
    throw Error("The root element is null, we can not use React");
}


if (navigator.serviceWorker !== undefined) {
    navigator.serviceWorker.register("sw.js");
}
