import { 
  SET_SELECTED_USER,
  SET_USERS,
  UNSET_USER
 } from '../actionTypes'

 const initialState = {
  users: [],
  selectedUser: null,
}

 export function usersReducer(state = initialState, action) {
  switch(action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      }
    case SET_SELECTED_USER:
      return {...state, selectedUser: action.user}
    case UNSET_USER:
      return {...state, selectedUser: null}
    default:
      return state
  }
}