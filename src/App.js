import React from 'react'

import './App.css';

class App extends React.Component {

	inputField = () => {
		return (
			<label htmlFor="content">
				<input type="text" id="content" className="input-field" name="content" />
			</label>
		)
	}

	renderedText = () => {
		return (
			<h1>Text Goes Here</h1>
		)
	}

	render() {

		return (
			<main className="main-container">
				{this.renderedText()}
				{this.inputField()}
			</main>
		)

	}
}

export default App;
