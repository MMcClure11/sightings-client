import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import { getCurrentUser } from '../actions/currentUser'
import Header from '../components/Header'


class Home extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  // onClick = (url) => {
  //   this.props.history.push(url)
  // }
//instead of welcome, button for the user to go to their profile
//add about, info, footer
  render() {
    return (
      <div>
        { this.props.loggedIn ? <NavBar currentUser={this.props.currentUser} history={this.props.history}/> : 
        <>
          {/* <Link to="/signup" onClick={() => this.onClick('/signup')}>Sign Up</Link> OR <Link to="/login" onClick={() => this.onClick('/login')}>Log In</Link> */}
        <Header history={this.props.history} />
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

export default connect(mapStateToProps, { getCurrentUser })(Home)