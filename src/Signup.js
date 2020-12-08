import axios from 'axios'

import Form from './Form'

export default function Signup () {
  async function submit (data) {
    try {
      const response = await axios
        .post('http://localhost:4000/curator', data)

      console.log('response test:', response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Form title='Signup' submit={submit} />
  )
}