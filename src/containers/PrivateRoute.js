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

const mapStateToProps = (state) => {
  return { loggedIn: !!state.currentUser }
}


export default connect(mapStateToProps)(PrivateRoute)