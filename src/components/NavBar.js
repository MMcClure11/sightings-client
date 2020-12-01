import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <p>Logged in as {this.props.currentUser.username}</p>
        <p>MyProfile</p>
        <p>Logout</p>
      </div>
    )
  }
}
