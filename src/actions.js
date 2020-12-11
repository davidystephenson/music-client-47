import axios from 'axios'

function newJwt (jwt) {
  return {
    type: 'JWT',
    payload: jwt
  }
}

export function postLogin (data) {
  return async function thunk (dispatch, getState) {
    try {
      const loginResponse = await axios
        .post(
          'http://localhost:4000/login', // url
          data, // body
          { // options and/or configuration
            headers: {
              xyz: 'abc'
            }
          }
        )

      console.log('loginResponse test:', loginResponse)

      console.log('loginReponse.data test:', loginResponse.data)

      const response = await axios.get(
        'http://localhost:4000/me', // url
        { // options
          headers: {
            Authorization: `Bearer ${loginResponse.data}`
          }
        }
      )

      console.log('response test:', response)

      const action = newJwt(loginResponse.data)
      dispatch(action)
      // dispatch(newJwt(response.data))
    } catch (error) {
      console.log(error)
    }
  }
}