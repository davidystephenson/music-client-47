import { useState } from 'react'

export default function Form ({ title, submit }) {
  const [data, setData] = useState({})

  console.log('data test:', data)

  function onChange (event) {
    const { value, name } = event.target

    const newData = { ...data, [name]: value }

    setData(newData)
  }

  async function onSubmit (event) {
    event.preventDefault()

    try {
      console.log('data test:', data)

      await submit(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>{title}</h3>

      <label>
        Name
        {' '}
        <input type='text' name='name' onChange={onChange} value={data.name} />
      </label>

      <label>
        Password
        {' '}
        <input type='text' name='password' onChange={onChange} value={data.password} />
      </label>

      <button>Submit</button>
    </form>
  )
}