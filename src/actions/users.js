import { 
  GET_USERS,
  SET_USERS
 } from '../actionTypes'

const URL = 'http://localhost:3000/api/v1'
// const URL = 'https://nature-watch-api.herokuapp.com/api/v1'

export const getUsers = () => {
  return dispatch => {
    return fetch(`${URL}/users`, {
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