import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/currentUser'
import SightingsContainer from '../containers/SightingsContainer'

class MyProfile extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div>
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
