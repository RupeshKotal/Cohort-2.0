import { useEffect, useState } from "react"

function App(){

  const [todo,setTodo]=useState([])
  const[id,setid] = useState(0)

  useEffect(()=>{

    fetch("https://sum-server.100xdevs.com/todos?id={id}").then(async function (res){
      const response = await res.json();
      setTodo(response.todos) 
    })
  },[id])


  return(
    <div>
      {todo.map(todos=><Todo key={todos.id}  title={todos.title} description={todos.description} Id={id}></Todo>)}

      <button onClick={function(){
        setid(id+1)
      }}>Click me</button>
    </div>
  )
}


function Todo({Id,title,description}){
return(
  <div>
    <h1>{Id}</h1>
    <h1>{title}</h1>
    <h2>{description}</h2>
  </div>
)
}

export default App;

