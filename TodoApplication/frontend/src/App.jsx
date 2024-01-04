import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateTodo from './component/CreateTodo'
import Todo from './component/Todo'

function App() {

  const [todos,setTodos]= useState([])

  fetch("http://localhost:3000/getTod").then(async function (response){
  const json = await response.json();
  setTodos(json.response)
  })


  return (
    <>
      <CreateTodo></CreateTodo>
      <Todo todo={todos}></Todo>
    </>
  )
}

export default App
