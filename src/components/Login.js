import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/currentUser.js'


class Login extends Component {

  state = {
    username: '',
    password: ''
}

onChange = e => {
    const { name, value } = e.target
    this.setState({[name]: value})
}

onSubmit = e => {
    e.preventDefault()
    this.props.login(this.state, this.props.history)
    this.setState({
        username: '',
        password: ''
    })
}

  render() {
    return (
      <div className='auth-form-container'>
        <form className='auth-form u-margin-top-big' onSubmit={this.onSubmit}>
          <div className="u-margin-bottom-medium">
            <h2 className="heading-secondary--secondary u-margin-left-medium">
                Login 
            </h2>
          </div>
          <div className="auth-form__group">
            <input className='auth-form__input' placeholder="username" value={this.state.username} name="username" type="text" onChange={this.onChange} />
            <label for="username" className="auth-form__label">Username</label>
          </div>
          <div className="auth-form__group">
            <input className='auth-form__input' placeholder="password" value={this.state.password} name="password" type="password" onChange={this.onChange} />
            <label for="password" className="auth-form__label">Password</label>
          </div> 
          <div className="auth-form__group">
            <input className='btn u-margin-left-medium' type="submit" value="Log In"/>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { login })(Login)