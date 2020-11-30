import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends Component {

  onClick = (url) => {
    this.props.history.push(url)
}

  render() {
    return (
      <div>
        { this.props.loggedIn ? <h2>Welcome, {this.props.currentUser.username}</h2> :
        <>
          <Link to="/signup" onClick={() => this.onClick('/signup')}>Sign Up</Link> OR <Link to="/login" onClick={() => this.onClick('/login')}>Log In</Link>
        </>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
      loggedIn: !!state.currentUser,
      currentUser: state.currentUser
  })
}

export default connect(mapStateToProps)(Home)