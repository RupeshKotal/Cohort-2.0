import { useRef,useState } from "react";

function Assigmnet2(){
    const [count,setCount]=useState(0)


    const noOftime = useRef(0);

 

    function handelRender(){
        setCount(count + 1 )
    }

    noOftime.current = noOftime.current + 1

    return (
        <div>
 <p>This component has renreder no of {noOftime.current} times</p>
 <button onClick={handelRender}> click {count}</button>
    </div>
    )
}


export default Assigmnet2;