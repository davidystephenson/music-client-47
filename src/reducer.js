const initial = {
  name: '', jwt: null
}

export default function reducer (state = initial, action = {}) {
  console.log('action test:', action)
  console.log('state test:', state)

  switch (action.type) {
    case 'JWT':
      const newState = { ...state, jwt: action.payload }

      console.log('newState test:', newState)

      return newState
    default:
      return state
  }
}
