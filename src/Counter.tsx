import * as React  from 'react';

interface ICounterProps {
	increment: number;
	color: string;
}

interface ICounterState {
	counter: number;
}

export default class Counter extends React.Component<ICounterProps, ICounterState> {
	private interval: number;

	constructor(props) {
		super(props);
		this.state = { counter: 0 };
		this.interval = window.setInterval(() => this.tick(), 1000);
	}

	tick() {
		this.setState({
			counter: this.state.counter + this.props.increment
		});
	}

	componentWillUnmount() {
		window.clearInterval(this.interval);
	}

	render() {
		return (
			<h1 style={{ color: this.props.color }}>
				Counter ({this.props.increment}): {this.state.counter}
			</h1>
		);
	}
}
