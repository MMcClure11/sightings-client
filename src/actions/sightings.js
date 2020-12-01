import {
  GET_SIGHTINGS
} from '../actionTypes'

const URL = 'http://localhost:3000/api/v1/sightings'

export function getSightings() {
  return (dispatch) => {
    fetch(URL)
    .then(resp => resp.json())
    .then(sightings => dispatch({
      type: GET_SIGHTINGS,
      sightings
    }))
  }
}