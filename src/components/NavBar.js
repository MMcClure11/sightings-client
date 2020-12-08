import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from '../components/Logout'
import sprite from '../imgs/sprite.svg'


class NavBar extends Component {

  render() {
    return (
      <nav className='nav'>
        {this.props.loggedIn ? 
          <>
          <p>{this.props.currentUser.username}</p>
          <div className='nav__link-container'>
            <NavLink className='nav__link' to="/">
              <span>
                <svg className="icon icon--nav">
                  <use href={sprite + '#icon-home3'} />
                </svg>
                Home
              </span>
            </NavLink>
            <NavLink className='nav__link' to="/myprofile">
              <span>
                <svg className="icon icon--nav">
                  <use href={sprite + '#icon-user'} />
                </svg>
                Profile
              </span>  
            </NavLink>
            <NavLink className='nav__link' to="/sightings">
            <span>
                <svg className="icon icon--nav">
                  <use href={sprite + '#icon-binoculars'} />
                </svg>
                Sightings
              </span>
            </NavLink>
          </div>
          <div className='nav__logout-container'>
            <Logout /> 
          </div>
          </>:
            <div className='nav__link-container'>
              <NavLink className='nav__link' to="/">Home</NavLink>
              <NavLink className='nav__link' to="/signup">Sign Up</NavLink>
              <NavLink className='nav__link' to="/login">Login</NavLink>
            </div>
        }
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    currentUser: state.currentUser
  })
}

export default connect(mapStateToProps)(NavBar)
