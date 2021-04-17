import {
  SET_CURRENT_USER,
  CLEAR_CURRENT_USER,
  BEGIN_AUTH,
  COMPLETE_AUTH,
} from '../actionTypes';

export function currentUserReducer(
  state = { currentUser: {}, authComplete: false },
  action
) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.user,
      };
    case CLEAR_CURRENT_USER:
      return null;
    case BEGIN_AUTH:
      return { ...state, authComplete: false };
    case COMPLETE_AUTH:
      return { ...state, authComplete: true };
    default:
      return state;
  }
}
