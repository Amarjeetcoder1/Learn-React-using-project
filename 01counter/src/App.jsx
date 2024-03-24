import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // const [varible, function] = useState() => help to change the state in UI
  const [counter, setCounter] = useState(0)

  // let counter = 15

  const addValue = () => {
    // counter = counter + 1
    // setCounter(counter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)

  }
  const removeValue = () => {
    setCounter(counter - 1)
  }


  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add to cart {counter}</button>
      <br />
      <button onClick={removeValue}>Remove {counter}</button>
      <p>footer: {counter}</p>

    </>
  )
}

export default App
