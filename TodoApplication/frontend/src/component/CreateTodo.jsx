import { useState } from "react";

function CreateTodo(){
    const [title,setTitle] = useState("")
    const [description,setdescription]=useState('')
    return(
       <>
       <input id="title" type="text" placeholder="title" onChange={function(e){
        setTitle(e.target.value) 
       }} /><br />
        <input id="description" type="text" placeholder="description" onChange={function (e) {
            setdescription(e.target.value)
        }}/><br />
        <button onClick={()=>{
            fetch("http://localhost:3000/addTod",{
                method:"POST",
                body:JSON.stringify({
                    title: title,
                    description:description
                            }),
                            headers:{
                                "contentType": "application/json"
                            }
            }).then(async function(res){
                const json = res.json();
                alert("Todo Addded")
            })
        }}>Add Todo</button>

       </>
    )
}

export default CreateTodo