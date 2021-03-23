import React from 'react'

const PersonCard = props => {

	return (
		<section className="card">
			<h3>{props.person.name}</h3>
			<p>{props.person.funFact}</p>
		</section>
	)
}

export default PersonCard
