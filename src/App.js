import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import People from './People'
import Person from './Person'

export default React.createClass({
  render (){
    return (
      <Router>
        <div>
          <Route exact={true} path="/" component={People} />
          <Route path="/person/:personId" component={Person} />
        </div>
      </Router>
      )
  }
})