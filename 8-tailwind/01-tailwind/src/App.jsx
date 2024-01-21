import { useState } from 'react'
import './App.css'
import { Revenue } from './componet/Revenue'


function App() {
  

  return (
    <>
      <div className='grid grid-cols-3 gap-4'>
      <Revenue title={"Amount pendeng"} amount={"2345464"} orderCount={"13"} paymenDate={"Today"} time={"4:00 PM"}></Revenue>

      <Revenue title={"Amount pendeng"} amount={"5234582"} orderCount={"13"}></Revenue>

      <Revenue title={"Amount pendeng"} amount={"90457"} orderCount={"13"} ></Revenue>
      </div>
    
        </> 
  )
}

export default App
