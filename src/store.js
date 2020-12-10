import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'

import reducer from './reducer'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : x => x;

const thunkMiddleware = applyMiddleware(reduxThunk)

const enhancer = compose(thunkMiddleware, devTools)

export default createStore(reducer, enhancer)