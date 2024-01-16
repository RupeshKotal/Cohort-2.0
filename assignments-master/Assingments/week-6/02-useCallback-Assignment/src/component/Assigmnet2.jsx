import { useCallback, useState } from "react";

function Assignment2(){
const [input,setInput]= useState("")

const buttonClicked = useCallback(()=>{
    alert(input)
},[input])

    return <>
      <input type="text" placeholder="type SOmeting" onChange={(e)=>{
        setInput(e.target.value)
      }}/>

      <button onClick={buttonClicked}>Click To show alert</button>
    </>
}


export default Assignment2;