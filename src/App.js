import React from 'react'
import './App.css'
import contacts from './contacts.json'
import {browserRouter as Router, Route, Link} from 'react-router-dom'
import People from './People'
import Person from './Person'

const styles = {
  heading: {
    color: 'white',
    background: 'rgb(116,131,89)',
  }
}

export default React.createClass({
  render (){
    return (
      <div>
      <Router>
        <Route exact={true} path="/" component={People} />
        Route path="/person/:personID" component={Person} />
      </Router>
      </div>
      )
  }
})