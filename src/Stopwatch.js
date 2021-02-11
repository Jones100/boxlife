import React, {Component} from "react";
import "./App.css";

class StopWatch extends Component {

	state = {
		isRunning: false,
		elapsedTime: 0,
		previousTime: 0
	}

	componentDidMount() {
		this.intervalID = setInterval(() => this.tick(), 100);
	}

	tick = () => {
		if (this.state.isRunning) {
			const now = Date.now();
			this.setState(prevState => ({
				previousTime: now,
				elapsedTime: prevState.elapsedTime +
				(now - this.state.previousTime) 
			}));
		} 
	}

	handleStopwatch = () => {
		this.setState(prevState => ({
			isRunning: !prevState.isRunning
		}));
		if (!this.state.isRunning) {
			this.setState({previousTime: Date.now() });
		}
	}

	render() {
		return (
			<div>
				<h2 className = "stopwatch"> Stopwatch </h2>
				<button onClick = {this.handleStopwatch}> 
					{this.state.isRunning ? "Stop" : "Start"} 
				</button>
				<button> Reset </button>
			</div>
		)
	} 
}

export default StopWatch;