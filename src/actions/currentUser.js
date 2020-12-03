import { 
  SET_CURRENT_USER,
  CLEAR_CURRENT_USER
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

export function getCurrentUser() {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/get_current_user", {
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
            type: SET_CURRENT_USER, 
            user: response
          })
        }
      })
      .catch(console.log)
  }
}

export function logout() {
  return dispatch => {
    dispatch({type: CLEAR_CURRENT_USER})
    // dispatch(clearSightings())
    return fetch('http://localhost:3000/api/v1/logout', {
      credentials: "include",
      method: "DELETE"
    })
  }
}