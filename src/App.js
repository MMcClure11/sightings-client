import { BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import './App.css';

import Home from './containers/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import MyProfile from './containers/MyProfile'
import SightingContainer from './containers/SightingContainer'
import NavBar from './components/NavBar'
import PrivateRoute from './containers/PrivateRoute'
import SightingPage from './components/SightingPage'
import UserContainer from './containers/UserContainer'
import UserPage from './components/UserPage'

function App() {
  const history = useHistory();
  return (
    <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/login' component={Login} history={history}/>
            <Route exact path='/signup' component={Signup} history={history}/>
            <PrivateRoute exact path='/myprofile' component={MyProfile} history={history}/>
            <PrivateRoute exact path='/users' component={UserContainer} history={history}/>
            <PrivateRoute exact path='/users/:id' component={UserPage} history={history}/>
            <PrivateRoute exact path='/sightings' component={SightingContainer} history={history}/>
            <PrivateRoute exact path='/sightings/:id' component={SightingPage} history={history} />
            <Route exact path="/" component={Home} history={history}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
