import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from '../components/Logout'


class NavBar extends Component {

  render() {
    return (
      <nav className='nav'>
        {this.props.loggedIn ? 
          <>
          <div className='nav__link-container'>
            <NavLink className='nav__link' to="/">Home</NavLink>
            <NavLink className='nav__link' to="/myprofile">My Profile</NavLink>
            <NavLink className='nav__link' to="/sightings">Sightings</NavLink>
          </div>
          <div className='nav__logout-container'>
            <Logout /> 
          </div>
          </>:
          null
        }
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return ({loggedIn: !!state.currentUser})
}

export default connect(mapStateToProps)(NavBar)
