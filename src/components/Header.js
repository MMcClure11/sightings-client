import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {

  onClick = (url) => {
    this.props.history.push(url)
  }

  render() {
    return (
        <header className="header">
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Nature Watch</span>
              <span className="heading-primary--sub">What did you see today?</span>
            </h1>
          </div>
          {/* { this.props.loggedIn ? null :
            <div className="header__buttons">
              <button className="btn" onClick={() => this.onClick('/signup')}>Sign Up</button>
              <button className="btn" onClick={() => this.onClick('/login')}>Login</button> 
            </div>
          } */}
        </header>
    )
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default connect(mapStateToProps)(Header)