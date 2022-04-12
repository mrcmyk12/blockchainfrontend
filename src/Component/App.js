import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			walletInfo: {}
		};
	}

	componentDidMount() {
		// fetch("http://localhost:5000/api/wallet-info").then((response) => {
		// 	console.log(response.json());
		// })
		// // .then((json) => this.setState({ walletInfo: json}));
		axios
			.get(`http://localhost:5000/api/wallet-info`)
			.then((response) => {
				console.log(response);
				this.setState({
					walletInfo: response.data
				});
			})
			.catch((error) => {
				this.setState({ errorMessage: error.message });
				console.error("There was an error!", error);
			});
	}

	render() {
		// const { address, balance } = this.state.walletInfo;
		return (
			<div className="App">
				Welcome to the blockchain...
				<br />
				<div>
					<Link to="/blocks">Blocks</Link>
				</div>
				<div>
					<Link to="/conduct-transaction">Conduct a Transaction</Link>
				</div>
				<div>
					<Link to='/transaction-pool'>Transaction Pool</Link>
				</div>
				<br />
				<div className="WalletInfo">
					<div>Address: {this.state.walletInfo.address}</div>
					<div>Balance: {this.state.walletInfo.balance}</div>
				</div>
			</div>
		);
	}
}

export default App;
