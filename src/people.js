import React from 'react'
import { Link } from 'react-router-dom'
import contacts from './contacts.json'
import './App.css'


export default React.createClass({
	render () {
		return (
			<div>
        <h2>My Peeps</h2>
        <ul>
        {contacts.map(contact=>(
        	<Link key={'clist' + contact.id} to={'/person/' + contact.id}>
            <li><img alt={contact.name.first + contact.name.last} src={contact.picture.thumbnail} /> {contact.name.first} {contact.name.last}
            </li>
          </Link>
          ))}
          </ul>
        </div>
      )
	}
})