import { currentUserReducer } from './currentUser';
import { sightingsReducer } from './sightings';
import { usersReducer } from './users';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  sightings: sightingsReducer,
  users: usersReducer,
});

export default rootReducer;
