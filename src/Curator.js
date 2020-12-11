import { Link } from 'react-router-dom'

import Signup from './Signup'
import Login from './Login'

export default function Curator () {
  return (
    <>
      <Login />
      <Signup />

      <Link to='/artists'>Artists</Link>
    </>
  )
}