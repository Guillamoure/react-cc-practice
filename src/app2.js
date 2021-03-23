import React from 'react'
import PersonCard from './components/person-card'

import './App.css';

class App extends React.Component {

	state = {
		arrayOfPeople: [
			{name: "Jack", funFact: "Jack likes to swim.", favoriteColor: "magenta"},
			{name: "Gerald", funFact: "Gerald likes to makes YouTube videos.", favoriteColor: "sky blue"},
			{name: "Annette", funFact: "Annette likes to play piano.", favoriteColor: "neon green"},
			{name: "Jamila", funFact: "Jamila likes to roller skate", favoriteColor: "auburn"}
		]
	}

	render() {

		return (
			<main className="main-container2">
				No Content Yet!
			</main>
		)

	}
}

export default App;
