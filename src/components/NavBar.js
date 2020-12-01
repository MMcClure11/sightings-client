import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logout from '../components/Logout'


export default class NavBar extends Component {

  onClick = (url) => {
    this.props.history.push(url)
}
  render() {
    return (
      <div>
        <p>Logged in as {this.props.currentUser.username}</p>
        <Link to="/myprofile" onClick={() => this.onClick('/myprofile')}>Profile</Link>
        <Logout />
      </div>
    )
  }
}
