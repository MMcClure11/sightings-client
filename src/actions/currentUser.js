import { 
  SET_CURRENT_USER,
  CLEAR_CURRENT_USER,
  BEGIN_AUTH,
  COMPLETE_AUTH
} from '../actionTypes' 

const URL = 'http://localhost:3000/api/v1'
// const URL = 'https://nature-watch-api.herokuapp.com/api/v1'

export const login = (credentials, history) => {
  return dispatch => {
      return fetch(`${URL}/login`, {
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
    return fetch(`${URL}/signup`, {
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
    return fetch(`${URL}/get_current_user`, {
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

export const authUser = () => {
  return dispatch => {
    dispatch({ type: BEGIN_AUTH})
    return fetch(`${URL}/get_current_user`, {
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
          dispatch({ type: COMPLETE_AUTH})
          dispatch({type: CLEAR_CURRENT_USER})

        } else {
          dispatch({
            type: SET_CURRENT_USER, 
            user: response
          })
          dispatch({ type: COMPLETE_AUTH})
        }
      })
      .catch(console.log)
  }
}

export const logout = (history) => {
  return dispatch => {
    // dispatch(clearSightings())
    return fetch(`${URL}/logout`, {
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