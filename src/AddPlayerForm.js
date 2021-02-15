import React, {Component} from "react";

class AddPlayerForm extends Component {
	state = {
		value: ""
	}

	handleValueChange = (e) => {
		this.setState({value: e.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		{this.props.addPlayer(this.state.value)};
		this.setState({value: ""});
	}

	render() {
		const {
			value,
			handleSubmit,
			handleValueChange

		} = this.props;

		return (
			<form onSubmit = {handleSubmit}>
				<input
					type = "text"
					value = {value}
					onChange = {handleValueChange}
					placeholder = "Enter a players name"
				/>

				<input
					type = "submit"
					value = "Add Player"
				/>
			</form>
		);
	}
}

export default AddPlayerForm;