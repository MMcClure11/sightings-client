import { 
  SET_CURRENT_USER,
  CLEAR_CURRENT_USER
} from '../actionTypes' 

export const login = (credentials, history) => {
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

export const signup = (credentials, history) => {
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

export const getCurrentUser = () => {
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

export const logout = (history) => {
  return dispatch => {
    // dispatch(clearSightings())
    return fetch('http://localhost:3000/api/v1/logout', {
      credentials: "include",
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(() => {
      dispatch({type: CLEAR_CURRENT_USER})
      history.push('/')
    })
  }
}