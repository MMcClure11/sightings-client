import { connect } from "react-redux"
const { Route, Redirect } = require("react-router-dom")

const PrivateRoute = ({ component: Component,loggedIn, ...rest }) => {
  return <Route {...rest} render={(props) => (
    loggedIn
      ? <Component {...props} />
      : <Redirect to='/login' />
  )}
  />
}

//note if try to redirect to '/' still having the problem of setting the user again

const mapStateToProps = (state) => {
  return { loggedIn: !!state.currentUser }
}


export default connect(mapStateToProps)(PrivateRoute)