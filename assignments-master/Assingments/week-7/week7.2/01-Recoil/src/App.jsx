import { useState } from "react";
import "./App.css";
import { countAtom } from "./store/Atoms/count";
import {RecoilRoot,useRecoilState,useRecoilValue, useSetRecoilState}  from 'recoil'
import {evenSelector} from "./store/Atoms/count"


function App() {

  return (
    <>  <RecoilRoot>
      <Count></Count>
      </RecoilRoot>    
     
    </>
  );
}

function Count() {

  console.log("Count Rendewr");
  return (
    <div>
      <CountRender></CountRender>
      <Button ></Button>
      <EvenRender></EvenRender>
    </div>
  );
}


//Count Render
function CountRender() {
  const count = useRecoilValue(countAtom);
  return <div>Count is {count}</div>;
}



//Button Componnet

//*** In this button component also re-render */
// function Button() {
//   const [count,setCount]= useRecoilState(countAtom);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Increase
//       </button>

//       <button
//         onClick={() => {
//           setCount(count - 1);
//         }}
//       >
//         Decrease
//       </button>
//     </div>
//   );
// }

function Button(){
 const setCount = useSetRecoilState(countAtom);
 console.log("button rendered");
  return(
    <div>
      <button onClick={()=>{
        setCount((e)=>(
          e+1
        ))
      }}>Increase</button>

      <button onClick={()=>{
        setCount((e)=>(
          e-1
        ))
      }}>Decrase</button>
    </div>
  )
}

function EvenRender(){
 const count = useRecoilValue(evenSelector);

return <div>
  {count ? "It is Even": "It is ODd"}
</div>
}

export default App;
