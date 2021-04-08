import { 
  SET_USERS
 } from '../actionTypes'

 export function usersReducer(state = { users: [] }, action) {
  switch(action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      }
    default:
      return state
  }
}