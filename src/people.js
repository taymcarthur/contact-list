import React from 'react'
import { Link } from 'react-router-dom'
import contacts from './contacts.json'
import './App.css'


export default React.createClass({
	render () {
		return (
			<div className="mainContainer">
      <div className="header">
        <h2>My Peeps</h2>
        </div>
        <ul>
        {contacts.map(contact=>(
          <Link className="Name" key={'clist' + contact.id} to={'/person/' + contact.id}>
            <li className="eachContact">
              <img className="circle" alt={contact.name.first + contact.name.last} src={contact.picture.thumbnail} /><span>{contact.name.first} {contact.name.last}</span>
            </li>
          </Link>
        ))}
          </ul>
        </div>
      )
	}
})