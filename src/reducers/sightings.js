import {
  GET_SIGHTINGS
} from '../actionTypes'

const initialState = []

export function sightingsReducer(state = initialState, action) {
  switch(action.type){
    case GET_SIGHTINGS:
      return action.sightings
    default:
      return state
  }
}