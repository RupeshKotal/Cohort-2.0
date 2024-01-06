import { useState } from "react"

function CreateTodo(){
  
    const [title,setTitle] = useState("");
    const [description,setdescription] = useState("")
    return(
        <div>
            <input style={{
              padding:10,
              margin:10
            }} type="text" placeholder="title" onChange={(e)=>{
                const value = e.target.value
                    setTitle(e.target.value)
            }}/><br />


            <input style={{
                padding:10,
                margin:10
            }} type="text" placeholder="description" onChange={(e)=>{
                const value = e.target.value
                setdescription(e.target.value)
        }}/><br /><br />

            <button 
            onClick={
                ()=>{
                    fetch('http://localhost:3000/todo',{

                    method:"POST",
                    body:JSON.stringify({
                        title:title,
                        description: description,
                    }),
                    headers:{
                        "Content-Type":"application/json"
                    }
                    }).then(async (res) =>{
                         const json =await res.json();
                         alert("TODO aded")

                    })
                }
            }

            // onClick={() => {
            //     fetch('http://localhost:3000/todo', {  // Corrected URL
            //       method: 'POST',
            //       body: JSON.stringify({
            //         title: title,
            //         description: description,
            //       }),
            //       headers: {
            //         'Content-Type': 'application/json',  // Corrected header name
            //       },
            //     })
            //       .then(async (res) => {
            //         const json = await res.json();
            //         alert('TODO added');
            //       })
            //       .catch((error) => {
            //         console.error('Error adding TODO:', error);
            //       });
            //   }}
            
            >Add TO DO</button>
        </div>
    )
}

export default CreateTodo