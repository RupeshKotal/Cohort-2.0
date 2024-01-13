import { useState,useMemo } from "react";


function Assignment3(){
const [item,setItem] = useState([
    {name:"Choclate",value:20},
    {name:"Chips",value:30},
    {name:"Vegetable",value:25},
    {name:"Tomato",value:50},
    {name:"Onion",value:30},
    {name:"Onion",value:30},
])

const totalValue = useMemo(()=>{
let value = 0;
for(let i =0;i<item.length;i++){
    value = value + item[i].value
}
return value
},[item])


    return(
        <>
       <div>
       <ul>
            {item.map((item,index) =>(
                <li key={index}>{item.name} Price :- {item.value}</li>
            ))}
        </ul>
        <p>Total Value : {totalValue}</p>
       </div>
        </>
    )
}

export default Assignment3;