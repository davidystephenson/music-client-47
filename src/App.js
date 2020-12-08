import Signup from './Signup'
import Login from './Login'
import Greeting from './Greeting'
import Artists from './Artists'

function App() {
  console.log('app test')

  return (
    <main>
      <Greeting />

      <Login />
      <Signup />
      <Artists />
    </main>
  )
}

export default App;
