import {
  GET_SIGHTINGS,
  ADD_SIGHTING
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

export function addSighting(sightingData) {
  return dispatch => {
    // console.log(sightingData)
    const sendableSightingData = {
      image: sightingData.image,
      common_name: sightingData.commonName,
      scientific_name: sightingData.scientificName,
      notes: sightingData.notes,
      date: sightingData.date,
      identified: sightingData.identified,
      category: sightingData.category
    }
    // console.log(sendableSightingData)
    return fetch(URL, {
      credentials: "include",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendableSightingData),
    })
    .then(response => response.json())
    .then(sighting => {
      if (sighting.error) {
        alert(sighting.error)
      } else {
        dispatch({
          type: ADD_SIGHTING, 
          sighting
        })
        // dispatch(getCurrentUser())
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
}