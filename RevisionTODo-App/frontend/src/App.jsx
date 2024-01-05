import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateTodo from './Components/CreateTodo'
import Todos from './Components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <CreateTodo></CreateTodo>

       <Todos></Todos>
    </>
  )
}

export default App
