import React from 'react'
import contacts from './contacts.json'
import './App.css'

export default React.createClass({
  getInitialState(){
    return {
      contact: contacts.filter(person=>{
        return Number(person.id) === Number(this.props.match.params.personId) //params means the paramaater we are searching for is ID. This function means if the id has a #, return the id 
      })[0]
    }
  },
  handleBack(e){
    e.preventDefault()
    this.props.history.goBack()
  },
  render(){
    var contact = this.state.contact
    return(
      <div>
        <div className='img'>
          <button className="back" onClick={this.handleBack}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
          <img alt={contact.name.first} src={contact.picture.large} className='personImg' />
        </div>
        <ul className='personInfo'>
          <li><i className="fa fa-user" aria-hidden="true"></i>{contact.name.first} {contact.name.last}</li>
          <li><i className="fa fa-envelope" aria-hidden="true"></i>{contact.email}</li>
          <li><i className="fa fa-mobile" aria-hidden="true"></i>{contact.phone}</li>
          <li><i className="fa fa-globe" aria-hidden="true"></i>{contact.location.city}, {contact.location.state}</li>
        </ul>
      </div>
    )
  }
})