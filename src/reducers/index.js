import { currentUserReducer } from './currentUser'


import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  currentUser: currentUserReducer

})

export default rootReducer