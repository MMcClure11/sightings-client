import { BrowserRouter as Router, Route} from 'react-router-dom';
import { useHistory } from 'react-router';

import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import MyProfile from './components/MyProfile'
import SightingList from './components/SightingList';

function App() {
  const history = useHistory();
  return (
    <div className="App">
        <Router>
          <Route exact path='/login' component={Login} history={history}/>
          <Route exact path='/signup' component={Signup} history={history}/>
          <Route exact path='/myprofile' component={MyProfile} history={history}/>
          <Route exact path='/sightings' component={SightingList} history={history}/>
          <Route exact path="/" component={Home} history={history}/>
      </Router>
    </div>
  );
}

export default App;
