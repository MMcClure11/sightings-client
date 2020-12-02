import React, { Component } from 'react'

export default class Header extends Component {

  onClick = (url) => {
    this.props.history.push(url)
  }

  render() {
    return (
        <header className="header">
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main"></span>
              <span className="heading-primary--sub"></span>
            </h1>
          </div>
          <div className="header__buttons">
            <button className="btn" onClick={() => this.onClick('/signup')}>Sign Up</button>
            <button className="btn" onClick={() => this.onClick('/login')}>Login</button> 
          </div>
        </header>
    )
  }
}
