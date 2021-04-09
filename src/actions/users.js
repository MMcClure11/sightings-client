import { 
  SET_USERS,
  SET_SELECTED_USER,
  UNSET_USER
 } from '../actionTypes'

const BASE_URL = 'http://localhost:3000/api/v1'
// const URL = 'https://nature-watch-api.herokuapp.com/api/v1'
const USER_URL = `${BASE_URL}/users`


export const getUsers = () => {
  return dispatch => {
    return fetch(`${BASE_URL}/users`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          console.log(response.error)
        } else {
          dispatch({
            type: SET_USERS, 
            users: response
          })
        }
      })
      .catch(console.log)
  }
}

export const setSelectedUser = (userId) => {
  return dispatch => {
    fetch(`${USER_URL}/${userId}`, {
      credentials: 'include'
    })
    .then(resp => resp.json())
    .then(user => dispatch({
      type: SET_SELECTED_USER,
      user
    }))
  }
}

export const unsetUser = () => ({type: UNSET_USER})
