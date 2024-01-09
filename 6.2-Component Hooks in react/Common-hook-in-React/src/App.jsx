import { useEffect, useState } from "react"
import axios from "axios"

function App(){

 
  const[id,setid] = useState(1)

  return(
    <div>
     
     <Todo Id={id}></Todo>

      <button onClick={function(){
        setid(1)
      }}>1</button>

<button onClick={function(){
        setid(2)
      }}>2</button>

<button onClick={function(){
        setid(3)
      }}>3</button>
    </div>
  )
}


function Todo({Id}){
  const [todo,setTodo]=useState({})

  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todo?id=" + Id).then(res =>{
      setTodo(res.data.todo)
    })
  },[Id])

return(
  <div>
    <h1>{Id}</h1>
    <h1>{todo.title}</h1>
    <h2>{todo.description}</h2>
  </div>
)
}

export default App;

