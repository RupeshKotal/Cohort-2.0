import { useEffect } from "react";
import { useState,useRef } from "react"


function Assigment1(){


    const inputRef = useRef();

    useEffect(()=>{
     inputRef.current.focus()
    },[inputRef])


    function handel(){
       inputRef.current.focus()
    }

    return <div>
    
    <input type="text" ref={inputRef}  placeholder="click on button to focuse" name="" id="Input" />
    <button ref={inputRef} onClick={handel}> Click </button>
    </div>
}


export default Assigment1;