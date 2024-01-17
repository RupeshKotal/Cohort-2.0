import { useState } from "react";
import "./App.css";
import { CountContext } from "./Context";
import { useContext } from "react";

function App() {
  const [count, setCount] = useState(0);

  //wrap anyone that wants to use the teleported value inside a provider


  return (
    <>
      <CountContext.Provider  value={count}>
      <Count setCount={setCount}></Count>
      </CountContext.Provider>
    </>
  );
}

function Count({setCount }) {
  return (
    <div>
      <CountRender></CountRender>

      <Button setCount={setCount}></Button>
    </div>
  );
}

//Count Render
function CountRender() {

  const count= useContext(CountContext)
  return <div>Count is {count}</div>;
}

//Button Componnet
function Button({setCount }) {

  const count= useContext(CountContext)
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
