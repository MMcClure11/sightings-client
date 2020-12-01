import { currentUserReducer } from './currentUser'
import { sightingsReducer } from './sightings'


import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  sightings: sightingsReducer

})

export default rootReducer