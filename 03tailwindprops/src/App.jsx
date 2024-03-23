import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../Component/card'

function App() {
  const [count, setCount] = useState(0)
  let obj = {
    username: "Amarjeet Ghosh",
    age: 19

  }
  let newArr = [1,2,3,4,5,5]
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-lg font-semibold mb-4'>Tailwind CSS</h1>
     
     
     <Card username = "Amarjeet" btnText = "Click Me"/>
     <Card username = "Shivam"/>
     
    </>
  )
}

export default App
