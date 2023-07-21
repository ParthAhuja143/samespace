import React from "react";
import ReactDOM from "react-dom";
import 'normalize.css/normalize.css';
import './styles/style.scss'
import "react-loading-skeleton/dist/skeleton.css";

import App from "./App";
import Preloader from "./components/common/PreLoader/Preloader";

ReactDOM.render(<Preloader />, document.getElementById("root"));

ReactDOM.render(<App />, document.getElementById("root"));
