import React, { Component } from 'react'
import { connect } from "react-redux"
import { authUser } from '../actions/currentUser'
import { Route, Redirect} from 'react-router-dom' 

class PrivateRoute extends Component {

  componentDidMount() {
    this.props.authUser()
  }

  renderContent = props => {
    const { component: Component, currentUser } = this.props
    if (currentUser && currentUser.authComplete) {
      if (currentUser && !currentUser.currentUser.username) {
        return <Redirect to='/' />
      } else {
        return <Component {...props} />
      }
    }
  }

  render() {
    const { component: Component, currentUser, authUser, ...rest} = this.props
    return <Route {...rest} render={(props) => (
      this.renderContent(props)
    )} />
  }
}

const mapStateToProps = (state) => {
  return { 
    currentUser: state.currentUser 
  }
}


export default connect(mapStateToProps, { authUser })(PrivateRoute)