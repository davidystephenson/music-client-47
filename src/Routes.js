import { Route } from 'react-router-dom'

import Artists from './Artists'
import Curator from './Curator'

export default function Routes () {
  return (
    <>
      <Route path='/curator' component={Curator} />
      <Route path='/artists' component={Artists} />
    </>
  )
}