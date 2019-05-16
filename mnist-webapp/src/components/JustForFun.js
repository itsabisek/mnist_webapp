import React from 'react'

class JustForFun extends React.Component {
	constructor() {
		super()
		this.state = {
			name: "Soumya",
			desc: "y0u"
		}

		// this.changeState = this.changeState.bind(this);
	}

	changeState = () => {
		this.setState({desc: "Daba Diya"})
	}

	render() {
		return (<div>
			<h1>Hello {this.state.name}!!{this.state.desc}!!</h1>
			{/* <button onClick = {this.changeState.bind(this)}>Daba Mujhe</button> */}
			{/* <button onClick={() => this.changeState()}>Daba Mujhe</button> */}
			<button onClick={this.changeState}>Daba Mujhe</button>
		</div>)
	}
}

export default JustForFun;
