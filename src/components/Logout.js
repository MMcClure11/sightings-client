import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../actions/currentUser.js"
import { withRouter } from 'react-router-dom'

//when using history.push('/') the home has a componentDidMount to get the current user, and EVEN though the user IS logged out
//it gets the user that was just logged out

const Logout = ({ logout, history }) => {
  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        history.push('/login')
        logout()
      }
    }>
      <input className='btn btn--small' type="submit" value="Log Out"/>
    </form>
  )
}

export default withRouter(connect(null, { logout } )(Logout))