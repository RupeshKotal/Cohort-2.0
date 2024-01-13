import { useMemo, useState } from "react";


function Assignment1(){
    let [input,setInput]= useState(0);

    let expensive= useMemo(()=>{
        let value =1;
        for(let i=1;i<=input;i++){
            value = value * i;
        }
        return value
    },[input])

    return(
        <>
        <input type="number" onChange={(e)=>{
            setInput(Number(e.target.value))
        }}/> <br />
        calculated value : {expensive}
        </>
    )
}

export default Assignment1;