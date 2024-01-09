import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
const [todo,setTodo] = useState([{
  title:"Go to gym",
  description:"Go to gym from 9-8",
  completed: "false"
},
{
  title:"Study DSa",
  description:"Study DSA from 9-8",
  completed: "false"
}])
  
  return (
    <div>
         <Todo title={todo[0].title} description={todo[0].description}/>
         <Todo title={todo[1].title} description={todo[2].description}/>

    </div>
  )
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
