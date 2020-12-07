import {
  GET_SIGHTINGS,
  ADD_SIGHTING,
  EDIT_SIGHTING,
  DELETE_SIGHTING,
  SET_SELECTED_SIGHTING,
  UNSET_SIGHTING,
  COMMENT_FORM_CHANGE
} from '../actionTypes'

const nullCommentForm = {
  content: ''
}

const initialState = {
  sightings: [],
  selectedSighting: null,
  commentForm: nullCommentForm
}

export function sightingsReducer(state = initialState, action) {
  switch(action.type){
    case GET_SIGHTINGS:
      return {...state, sightings: action.sightings}
    case ADD_SIGHTING:
      return {
        ...state,
        sightings: [...state.sightings, action.sighting]
      }
    case EDIT_SIGHTING:
      return {
        ...state, 
        sightings: [...state.sightings.map(sighting => sighting.id === action.sighting.id ? action.sighting : sighting)]
      }
    case DELETE_SIGHTING:
      return {
        ...state,
        sightings: [...state.sightings.filter(sighting => sighting.id !== action.sightingId)]
      }
    case SET_SELECTED_SIGHTING:
      return {...state, selectedSighting: action.sighting}
    case UNSET_SIGHTING:
      return {...state, selectedSighting: null}
    case COMMENT_FORM_CHANGE:
      return {...state, commentForm: {
        ...state.commentForm, [action.payload.name]: action.payload.value
      }}
    default:
      return state
  }
}