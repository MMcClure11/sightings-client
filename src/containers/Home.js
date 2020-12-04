import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/currentUser'
import Header from '../components/Header'


class Home extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

//add about, info, footer
  render() {
    return (
      <div>
        <>
        <Header history={this.props.history} />
        </>
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