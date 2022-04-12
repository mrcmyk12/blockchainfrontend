import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import axios from "axios";
import Transaction from "./Transaction";

const POLL_INTERVAL_MS = 10000;

class TransactionPool extends Component {
	constructor(props) {
		super(props);

		this.state = {
			transactionPoolMap: {}
		};

		this.fetchTransactionPoolMap = this.fetchTransactionPoolMap.bind(this);
        this.fetchMineTransactions = this.fetchMineTransactions.bind(this);
	}

	fetchTransactionPoolMap() {
		axios
			.get(`http://localhost:5000/api/transaction-pool-map`)
			.then((response) => {
				console.log(response);
				this.setState({ transactionPoolMap: response.data });
			});

            
	}

    fetchMineTransactions = () => {
        axios.get('http://localhost:5000/api/mine-transactions').then(
            (response) => {
                if(response.status === 200) {
                    alert('success');
                    this.props.history.push('/blocks')
                } else {
                    alert('The mine-transactions block request did not complete');
                }
            }
        )
    }

	componentDidMount() {
		this.fetchTransactionPoolMap();
        

		this.fetchPoolMapInterval = setInterval(
			() => this.fetchTransactionPoolMap(),
			POLL_INTERVAL_MS
		);
	}

	componentWillUnmount() {
		clearInterval(this.fetchPoolMapInterval);
	}

	render() {
		return (
			<div className="TransactionPool">
				<div>
					<Link to="/">Home</Link>
				</div>
				<h3>Transaction Pool</h3>
				{Object.values(this.state.transactionPoolMap).map((transaction) => {
					return (
						<div>
							<Transaction transaction={transaction} />
						</div>
					);
				})}
                <hr/>
                <Button onClick={this.fetchMineTransactions}>Mine the Transactions</Button>
			</div>
		);
	}
}

export default TransactionPool;
