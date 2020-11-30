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
      <div>
        <form onSubmit={this.onSubmit}>
          <input placeholder="username" value={this.state.username} name="username" type="text" onChange={this.onChange} />
          <input placeholder="password" value={this.state.password} name="password" type="password" onChange={this.onChange} />
          <input type="submit" value="Log In"/>
        </form>
      </div>
    )
  }
}

export default connect(null, { login })(Login)