import { connect } from "react-redux"
const { Route, Redirect } = require("react-router-dom")

const PrivateRoute = ({ component: Component,loggedIn, ...rest }) => {
  return <Route {...rest} render={(props) => (
    loggedIn
      ? <Component {...props} />
      : <Redirect to='/' />
  )}
  />
}

//note if try to redirect to '/' still having the problem of setting the user again upon logout
//however by having logout history.push('/login') there is no longer the problem of the user still being loggedIn

const mapStateToProps = (state) => {
  return { loggedIn: !!state.currentUser }
}


export default connect(mapStateToProps)(PrivateRoute)