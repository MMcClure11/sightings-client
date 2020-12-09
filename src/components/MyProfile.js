import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/currentUser'
import SightingList from './SightingList'

class MyProfile extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  onClick = (url) => {
    this.props.history.push(url)
  }

  render() {
    return (
      <>
        <div className='profile-headers'>
          <h2 className='heading-secondary'>Welcome, {this.props.currentUser && this.props.currentUser.username}</h2>
          {/* <h4 className='heading-tertiary'>Name: {this.props.currentUser && this.props.currentUser.name}</h4> */}
        </div>
        <SightingList />
      </>
    )
  }
}

const mapStateToProps = state => {
  return({
    currentUser: state.currentUser
  })
}

export default connect(mapStateToProps, { getCurrentUser })(MyProfile)
