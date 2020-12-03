import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logout from '../components/Logout'


export default class NavBar extends Component {

  render() {
    return (
      <div>
        <Link to="/myprofile">Profile</Link>
        <Link to="/sightings">All Sightings</Link>
        <Logout />
      </div>
    )
  }
}
