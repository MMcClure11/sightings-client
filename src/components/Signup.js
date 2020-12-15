import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signup, getCurrentUser } from '../actions/currentUser.js'
import { withRouter, Redirect } from 'react-router-dom'

class Signup extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  state = {
    username: '',
    password: '',
    name: '',
  }

  onChange = e => {
      const { name, value } = e.target
      this.setState({[name]: value})
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.signup(this.state, this.props.history)
    this.setState({
        username: '',
        password: '',
        name: '',
    })
  }

  render() {
    return (
      <>
      { !this.props.loggedIn ? 
        <div className='auth-form-container'>
          <form className='auth-form u-margin-top-medium' onSubmit={this.onSubmit}>
            <div className="u-margin-bottom-medium">
              <h2 className="heading-secondary u-margin-left-medium ">
                  Signup 
              </h2>
            </div>
            <div className="auth-form__group">
              <input placeholder="username" className='auth-form__input' value={this.state.username} name="username" type="text" onChange={this.onChange} />
              <label htmlFor="username" className="auth-form__label">Username</label>
            </div>
            <div className="auth-form__group">
              <input placeholder="password" className='auth-form__input' value={this.state.password} name="password" type="password" onChange={this.onChange} />
              <label htmlFor="username" className="auth-form__label">Password</label>
            </div>
            <div className="auth-form__group">
              <input placeholder="name" className='auth-form__input' value={this.state.name} name="name" type="text" onChange={this.onChange} />
              <label htmlFor="username" className="auth-form__label">Name</label>
            </div>
            <div className="auth-form__group">
              <input className='btn u-margin-left-medium ' type="submit" value="Signup"/>
            </div>
          </form>
        </div>
        : <Redirect to='/' />
        }
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser
  }
}

export default withRouter(connect(mapStateToProps, { signup, getCurrentUser })(Signup))