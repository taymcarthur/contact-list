import React from 'react'


export default React.createClass({
	render () {
		return (
			<div>
      <h2 style={styles.heading}>My Peeps</h2>
      <ul>
      {contacts.map(contacts=>(
      	<Link ke={'clist' + contact.id} to={'person.'}
        <li key={'clist' + contact.id><img alt={contact.name.first + contact.name.last} src={contact.picture.thumbnail} /> {contact.name.first} {contact.name.last}
        </li>
        ))}
        </ul>
        </div>)
	}
})