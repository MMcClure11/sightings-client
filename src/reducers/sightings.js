import {
  GET_SIGHTINGS,
  ADD_SIGHTING,
  EDIT_SIGHTING
} from '../actionTypes'

const initialState = []

export function sightingsReducer(state = initialState, action) {
  switch(action.type){
    case GET_SIGHTINGS:
      return action.sightings
    case ADD_SIGHTING:
      return [...state, action.sighting]
    case EDIT_SIGHTING:
      return state.map(sighting => sighting.id === action.sighting.id ? action.sighting : sighting)
    default:
      return state
  }
}