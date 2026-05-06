import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Props from './components/Props'
import UseState from './UseState'


function App() {
  const [counter, setCounter] = useState(0);
  
  return (
    <>
     
      <h1>{counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>

      {/* <Props name="indra" rollno="2503201000615" course="B.Tech" /> */}
    </>
  )
}

export default App