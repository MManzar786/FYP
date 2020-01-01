import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "./assets/css/bootstrap.min.css";
import "./assets/demo/demo.css";
import "./App.css";

import "perfect-scrollbar/css/perfect-scrollbar.css";
import "./assets/scss/paper-kit.scss";
//import "./assets/scss/paper-dashboard.scss?v=1.1.0";
import "./assets/demo/demo.css";
// pages
import Index from "./views/Index.js";
import NucleoIcons from "./views/NucleoIcons.js";
import LandingPage from "./views/examples/LandingPage.js";
import ProfilePage from "./views/examples/ProfilePage.js";
import RegisterPage from "./views/examples/RegisterPage.js";
// others

ReactDOM.render(<App />, document.getElementById("root"));
