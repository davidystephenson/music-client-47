import { useSelector } from 'react-redux'
import { selectJwt } from './selectors'

export default function Greeting () {
  const jwt = useSelector(selectJwt)

  if (jwt) return <div>You are logged in</div>

  return <div>You are not logged in</div>
}