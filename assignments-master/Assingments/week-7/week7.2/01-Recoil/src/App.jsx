import { useState } from "react";
import "./App.css";
import { countAtom } from "./store/Atoms/count";
import {RecoilRoot,useRecoilState,useRecoilValue}  from 'recoil'

function App() {

  return (
    <>  <RecoilRoot>
      <Count></Count>
      </RecoilRoot>    
     
    </>
  );
}

function Count() {
  return (
    <div>
      <CountRender></CountRender>
      <Button ></Button>
    </div>
  );
}


//Count Render
function CountRender() {
  const count = useRecoilValue(countAtom);
  return <div>Count is {count}</div>;
}



//Button Componnet
function Button() {
  const [count,setCount]= useRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}



export default App;
