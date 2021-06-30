import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

let elem;
elem = (
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

ReactDOM.render(elem, document.getElementById("root"));
