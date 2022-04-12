import React, { Component, useEffect } from "react";
import { FormGroup, Form, Input, Button, Alert } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import history from "../history";

class ConductTransaction extends Component {
	constructor(props) {
		super(props);

		this.state = {
			recipient: "",
			amount: 0
		};

		this.updateAmount = this.updateAmount.bind(this);
		this.updateRecipient = this.updateRecipient.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	updateRecipient = (event) => {
		this.setState({ recipient: event.target.value });
	};

	updateAmount = (event) => {
		this.setState({ amount: Number(event.target.value) });
	};

	onSubmit(e) {
		e.preventDefault();

		const transaction = {
			recipient: this.state.recipient,
			amount: this.state.amount
		};

		axios
			.post(`http://localhost:5000/api/transact`, transaction)
			.then((res) => {
				console.log(res.data);
			})
			.then((response) => {
				console.log(response);
				alert(`Transaction has been posted`);
			})
			.then(() => {
				this.props.history.push('/transaction-pool')
			});
	}

	componentDidMount() {
		const transaction = {
			recipient: this.state.recipient,
			amount: this.state.amount
		};

		axios
			.post(`http://localhost:5000/api/transact`, transaction)
			.then((res) => {
				console.log(res.data);
			})
			.then((response) => {
				console.log(response);
				history.push("/transaction-pool");
			});
	}

	render() {
		return (
			<div className="ConductTransaction">
				<Link to="/">Home</Link>
				<h3>Conduct Transaction</h3>
				<Form onSubmit={this.onSubmit}>
					<FormGroup>
						<Input
							type="text"
							placeholder="recipient"
							value={this.state.recipient}
							onChange={this.updateRecipient}
						/>
					</FormGroup>
					<FormGroup>
						<Input
							type="number"
							placeholder="amount"
							value={this.state.amount}
							onChange={this.updateAmount}
						/>
					</FormGroup>
					<div>
						<Button type="submit">Submit</Button>
					</div>
				</Form>
			</div>
		);
	}
}

export default ConductTransaction;
