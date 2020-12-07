import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useHistory } from 'react-router';
import './App.css';

import Home from './containers/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import MyProfile from './components/MyProfile'
import SightingList from './components/SightingList'
import NavBar from './components/NavBar'
import PrivateRoute from './containers/PrivateRoute'
import SightingPage from './components/SightingPage'

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
            <PrivateRoute exact path='/sightings' component={SightingList} history={history}/>
            <PrivateRoute exact path='/sightings/:id' component={SightingPage} history={history} />
            <Route exact path="/" component={Home} history={history}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
