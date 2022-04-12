import React from "react";
import ReactDOM from "react-dom";
import {
	Router,
	BrowserRouter,
	Route,
	Redirect,
	Switch
} from "react-router-dom";
import "./index.css";
import history from "./history";
import App from "./Component/App";
import Blocks from "./Component/Blocks";
import ConductTransaction from "./Component/ConductTransaction";
import reportWebVitals from "./reportWebVitals";
import TransactionPool from "./Component/TransactionPool";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Route exact path="/" component={App} />
			<Route path="/blocks" component={Blocks} />
			<Route path="/conduct-transaction" component={ConductTransaction} />
			<Route path="/transaction-pool" component={TransactionPool} />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
