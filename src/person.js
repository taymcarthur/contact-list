import React from 'react'

const styles = {
	backButton: {
		position:'absolute',
		top:10,
		left:10
	},
	imageContainer: {
		background: '#81bc39',
		textAlign: 'center',
		position:'realtive' 
	}
}

export default React.createClass({
	getInitialState() {
		return {
			contact: contacts.filter(person=>{
				return Number(person.id) === Number(this.props.match.params.personId)

			})[0]
		}
	},
	handleBack (e) {
		e.preventDefault()
		this.props.history.goBack()
	},
	render () {
		var contact = this.state.contact
		return (
			<div>
			<div style={styles.imageContainer}>
			<button style={style.backButton} onClick={this.handleBack}>Back</button>
			<img src={contact.picture.medium} />
			</div>
			<ul>
				<li>{contact.name.first} {contact.name.last}</li>

			<h1>{this.props.match.params.personId}</h1>
			</div>
		)
	}