import './App.css'
import React, { useState } from 'react'


function App() {
  
  const [title1,setTitle1] =useState()
  function updateTitle(){
    setTitle1(Math.random())
  }

  return (
    <>
    <button onClick={updateTitle}>submit</button>
        <Header title={title1}></Header>
        <Header title="my name is rupesh2"></Header>
        <Header title="my name is rupesh3"></Header>
        <Header title="my name is rupesh4"></Header>
    </>
  )
}


const Header = React.memo( function Header({title}){
  return(
   <div>
   {title}
    </div>
  )
 })

export default App
