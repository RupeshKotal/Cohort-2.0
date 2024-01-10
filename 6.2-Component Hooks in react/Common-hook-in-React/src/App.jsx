// // import { useEffect, useState } from "react"

import { useCallback } from "react";
import { memo, useState } from "react";

// import React, { useEffect, useMemo, useState } from "react";

// // import axios from "axios"
// // import { Component } from "react"

// function App(){
//   const [todo ,setTodo]= useState([])
//   const [id,setid] = useState(0)

   

//   useEffect(()=>{
//        fetch("https://sum-server.100xdevs.com/todos?id"+id).then(async function(res){
//         const response = await res.json();
//         setTodo(response.todos)
//        })
//   },[id])

//   useMemo(function(){

//   },[])


//  return(
//   <>
//   {/* <div>
//       {
//         todo.map((res) => (
//           <Todos key={res.id} Title={res.title} Description={res.description}></Todos>
//         ))
//       }
//   </div>

//   <button onClick={function (){setid(1)}}> 1 </button>
//   <button onClick={function (){setid(2)}}> 2 </button>
//   <button onClick={function (){setid(1)}}> 3 </button> */}

//   <Sum></Sum>
  

//   </>
  
//  )
//  }
//  function Todos({Title,Description}){
//   return(
//     <div>
//       <h1>{Title}</h1>
//       <h2>{Description}</h2>
//     </div>
//   )
//  }

//  function Sum(){
// const [value,setvalue] = useState(1)

// let result = useMemo(function(){
//   let add=0;
// for(let i=0;i<value;i++){
//   add = add + i
// }
// return add;
// },[value])

//   return(
//     <>
//     <input type="text" onChange={function(e){
//            setvalue(e.target.value)
//     }}/>
//     <br />
//     <br />

//     sum from 1 to given input value {value} = {result}


//     </>
//   )
//  }


function App(){

  const [count,setCount]=useState(0);

  let logsomething= useCallback(function (){
    console.log("reder logsomething()");

  },[])


  return(
    <div>
      <Child onClick={logsomething}></Child>

      <button onClick={()=>{
        setCount(count+1)
      }}>{count}</button>


    </div>
  )
}

const Child =memo(function({onClick}){
  console.log("child component render");

  return(
    <div>
      <button onClick={onClick}>CHild button</button>
    </div>
  )

})

export default App;

