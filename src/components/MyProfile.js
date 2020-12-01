import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/currentUser'
import SightingsContainer from '../containers/SightingsContainer'
import { Link } from 'react-router-dom'

class MyProfile extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  onClick = (url) => {
    this.props.history.push(url)
  }

  render() {
    return (
      <div>
        <Link to="/" onClick={() => this.onClick('/')}>Home</Link>
        <button>Report New Sighting</button>
        <h2>Username: {this.props.currentUser && this.props.currentUser.username}</h2>
        <h4>Name: {this.props.currentUser && this.props.currentUser.name}</h4>
        <SightingsContainer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
    currentUser: state.currentUser
  })
}

export default connect(mapStateToProps, { getCurrentUser })(MyProfile)
