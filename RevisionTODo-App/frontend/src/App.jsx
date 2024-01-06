import { useState } from 'react'
import './App.css'
import CreateTodo from './Components/CreateTodo'
import Todos from './Components/Todos'


function App() {
  const [varTodo, setvarTodo] = useState([])

  fetch('http://localhost:3000/todos').then(async function(res){
           const  json = await res.json();
           setvarTodo(json.getTodo)
  })

  return (
    <>
       <CreateTodo></CreateTodo>

       <Todos data={varTodo}> </Todos>
    </>
  )
}

export default App
