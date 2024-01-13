import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Assignment1 from './Component/Assignment1'
import Assignment2 from './Component/Assignment2'
import Assignment3 from './Component/Assignment3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Hello

      <Assignment1></Assignment1>
      {/* <Assignment2></Assignment2> */}
      {/* <Assignment3></Assignment3>
       */}
    </>
  )
}

export default App
