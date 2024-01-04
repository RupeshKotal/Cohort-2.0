

function Todo({todo}){
    return(
        <>
         {
            todo.map((todos)=>{

                return <div>
                    <h1>{todos.title}</h1>
                    <h2>{todos.description}</h2>
                    <button>{todos.completed===true?"completed":"mark as Completed"}</button>
                </div>
            })
         }
        </>
    )
}

export default Todo;
