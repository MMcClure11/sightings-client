import { 
  SET_CURRENT_USER
} from '../actionTypes' 

export function login(credentials, history) {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch({
            type: SET_CURRENT_USER, 
            user: response
          })
          history.push('/')
        }
      })
      .catch(console.log)
  }
}

export function signup(credentials, history) {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch({
            type: SET_CURRENT_USER, 
            user: response
          })
          history.push('/')
        }
      })
      .catch(console.log)
  }
}