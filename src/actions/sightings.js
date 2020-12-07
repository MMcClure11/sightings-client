import {
  GET_SIGHTINGS,
  ADD_SIGHTING, 
  EDIT_SIGHTING,
  DELETE_SIGHTING,
  SET_SELECTED_SIGHTING,
  UNSET_SIGHTING,
  COMMENT_FORM_CHANGE
} from '../actionTypes'

import { getCurrentUser } from './currentUser'

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
    const sendableSightingData = {
      image: sightingData.image,
      commonName: sightingData.commonName,
      scientificName: sightingData.scientificName,
      notes: sightingData.notes,
      date: sightingData.date,
      identified: sightingData.identified,
      category: sightingData.category,
      city: sightingData.city,
      region: sightingData.region,
      country: sightingData.country,
      public: sightingData.isPublic,
    }
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
        dispatch(getCurrentUser())
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
}

export function editSighting(sightingData) {
  return dispatch => {
    const sendableSightingData = {
      image: sightingData.image,
      commonName: sightingData.commonName,
      scientificName: sightingData.scientificName,
      notes: sightingData.notes,
      date: sightingData.date,
      identified: sightingData.identified,
      category: sightingData.category,
      city: sightingData.city,
      region: sightingData.region,
      country: sightingData.country,
      public: sightingData.isPublic,
      id: sightingData.id
    }
    return fetch(`${URL}/${sightingData.id}`, {
      credentials: "include",
      method: 'PATCH',
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
          type: EDIT_SIGHTING, 
          sighting
        })
        dispatch(getCurrentUser())
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
}

export function deleteSighting(sightingId) {
  return (dispatch) => {
    return  fetch(`${URL}/${sightingId}`, {
      credentials: "include",
      method: 'DELETE',
    })
    .then(resp => resp.json())
    .then(() => {
      dispatch({
      type: DELETE_SIGHTING,
      sightingId
      })
      dispatch(getCurrentUser())
    })
  }
}

export function setSelectedSighting(sightingId){
  return dispatch => {
    fetch(`${URL}/${sightingId}`, {
      credentials: 'include'
    })
    .then(resp => resp.json())
    .then(sighting => dispatch({
      type: SET_SELECTED_SIGHTING,
      sighting
    }))
  }
}

export const unsetSighting = () => ({type: UNSET_SIGHTING})

export const commentFormChange = (e) => ({
  type: COMMENT_FORM_CHANGE,
  payload: {name: e.target.name, value: e.target.value}
})

export const submitComment = commentData => {
  console.log("in action creator for submit comment")
}