import React from "react";
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.querySelector("#root")
);