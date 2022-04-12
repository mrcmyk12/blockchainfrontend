import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Block from "./Block";

class Blocks extends Component {
	constructor(props) {
		super(props);

		this.state = {
			blocks: []
		};
	}

	componentDidMount() {
		axios
			.get(`http://localhost:5000/api/blocks`)
			.then((response) => {
				console.log(response);
				this.setState({ blocks: response.data });
			})
			.catch((error) => {
				this.setState({ errorMessage: error.message });
				console.error("There was an error!", error);
			});
	}

	render() {
		console.log("this.state", this.state);

		return (
			<div>
				<div>
					<Link to="/">Home</Link>
				</div>
				<h3>Blocks</h3>
				{this.state.blocks.map((block) => {
					return (
						<div>
							<Block key={block.hash} block={block} />
						</div>
					);
				})}
			</div>
		);
	}
}

export default Blocks;
