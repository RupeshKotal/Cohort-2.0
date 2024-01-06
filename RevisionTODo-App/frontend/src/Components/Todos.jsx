function Todos({data}){
    return(
        <div>
          {
            data.map(function(todo){
                return <div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed == false? "mark as complete":"Done"} </button>
                </div>
            })
          }
        </div>
    )
}

export default Todos;