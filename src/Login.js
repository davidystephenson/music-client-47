import { useDispatch } from 'react-redux'
import axios from 'axios'

import Form from './Form'
import { postLogin } from './actions'

export default function  () {
  const dispatch = useDispatch()

  async function submit (data) {
    dispatch(postLogin(data))
  }

  return (
    <Form title='Login' submit={submit} />
  )
}