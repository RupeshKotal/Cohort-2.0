import { useState } from 'react'
import './App.css'

import { lazy } from 'react'
import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom'
import { Suspense } from 'react'

const Dashboard =lazy(()=> import('./component/Dashboard'))

const LandingPage = lazy(()=> import('./component/landingPage'))


function App() {

  

  return (
    <>
    <h1 style={{background:"green",color:"white"}}>Hello World</h1>

    
    <BrowserRouter>
    <Appbar/>
    <Routes>
      <Route path="/" element={<Suspense fallback={"loading.."}><LandingPage/></Suspense>}></Route>

      <Route path="/dashboard" element={<Suspense fallback={'loading...'}><Dashboard/></Suspense>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

function Appbar(){
  const Navigate = useNavigate();
  return(
    <>
    <button onClick={()=>{
      Navigate('/')
    }}>LangingPage</button>

    <button onClick={()=>{
      Navigate('/dashboard')
    }}>Dashboard</button>
    </>
  )
}

export default App
