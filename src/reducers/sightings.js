import {
  GET_SIGHTINGS,
  ADD_SIGHTING
} from '../actionTypes'

const initialState = []

export function sightingsReducer(state = initialState, action) {
  switch(action.type){
    case GET_SIGHTINGS:
      return action.sightings
    case ADD_SIGHTING:
      return [...state, action.sighting]
    default:
      return state
  }
}