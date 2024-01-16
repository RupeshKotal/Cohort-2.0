import { useState, useCallback, memo } from "react";

function Assignment1(){
const [count,setCount] = useState(0)

// const handleIncremnet = useCallback(()=>{
//   setCount(count+1)
// },[count])


const handleIncremnet = useCallback(()=>{
  setCount(currentCount => {
    return currentCount+1
  })
},[])


// const hnadelDecremnet = useCallback(()=>{
//     setCount(count-1)
//   },[count])



const hnadelDecremnet = useCallback(()=>{
    setCount(currentCount => {
        return currentCount - 1
    })
  },[])



    return <>

    <p>Count : {count}</p>
    <CounterButtons onIncrement={handleIncremnet}  onDecrement={hnadelDecremnet}></CounterButtons>
    
    </>
}


const CounterButtons = memo(
    function CounterButtons({onIncrement,onDecrement}){
        return <div>
         <button onClick={onIncrement}>Increment</button><br />
         <button onClick={onDecrement}>Decrement</button>
         </div>   
     }
) 

export default Assignment1;
