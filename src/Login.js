import { useDispatch } from 'react-redux'
import axios from 'axios'

import Form from './Form'

export default function Signup () {
  const dispatch = useDispatch()

  async function submit (data) {
    try {
      const response = await axios
        .post('http://localhost:4000/login', data)

      console.log('response test:', response)

      const action = {
        type: 'JWT',
        payload: response.data
      }

      dispatch(action)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Form title='Login' submit={submit} />
  )
}