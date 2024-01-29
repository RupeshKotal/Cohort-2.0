import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"


function useTodos(n){
  const [todos, settodos] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
   const value = setInterval(()=>{
      
      axios.get("https://sum-server.100xdevs.com/todos").then(res=>{
        settodos(res.data.todos)
        setLoading(false)
      })

    },n*1000)

    axios.get("https://sum-server.100xdevs.com/todos").then(res=>{
      settodos(res.data.todos)
      setLoading(false)
    })


    return () => {
       clearInterval(value)
    }
  },[n])


  return {todos,loading}
}

function App() {
 
  const {todos,loading}= useTodos(5);

  if(loading){
    return <div>Loading ....</div>
  }
  return (
    <>
      {todos.map(todo => <Mycomponent Todos ={todo}/>)}
    </>
  )
}

function Mycomponent({Todos}){

  

  return(
    <>
    <h3 >{Todos.title}</h3>
    <h4>{Todos.description}</h4>
    </>
  )

  // Render UI
}

export default App
