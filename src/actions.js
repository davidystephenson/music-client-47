import axios from 'axios'

function newJwt (jwt) {
  return {
    type: 'JWT',
    payload: jwt
  }
}

export function postLogin (data) {
  return async function (dispatch, getState) {
    try {
      const response = await axios
        .post('http://localhost:4000/login', data)

      console.log('response test:', response)

      const action = newJwt(response.data)
      dispatch(action)
      // dispatch(newJwt(response.data))
    } catch (error) {
      console.log(error)
    }
  }
}