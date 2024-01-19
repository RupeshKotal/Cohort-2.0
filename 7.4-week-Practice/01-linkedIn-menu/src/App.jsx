import { useMemo, useState } from 'react'
import './App.css'
import {networkAtom,jobsAtom,messageAtom,notificationAtom,totalNotification} from './atom'
import { RecoilRoot,useRecoilState,useRecoilValue,useSetRecoilState } from 'recoil'

function App() {

  return <RecoilRoot>
    <MainApp></MainApp>
  </RecoilRoot>
}

function MainApp(){

  const networkNotification = useRecoilValue(networkAtom)

  const jobsNotification = useRecoilValue(jobsAtom)
  
  // useRecoilVale
  const messageNotification = useRecoilValue(messageAtom)

  // useRecoilState
  const [messageCount,setMessageCount] = useRecoilState(messageAtom)

  const notification = useRecoilValue(notificationAtom)

  const setjobs =useSetRecoilState(jobsAtom)

//All COunt

//This is all good solution but better we have to go with selector mehoted in recoil 


  // const allCount = useMemo(()=>{
  //   return networkNotification + jobsNotification + messageNotification + notification
  // },[networkNotification,jobsNotification,messageNotification,jobsNotification])

const total = useRecoilValue(totalNotification)

  return (
    <>
      <button>Home</button>
      <button>My Network ({networkNotification >= 100 ? "99+" : networkNotification })</button>

      <button>Jobs ({jobsNotification >= 100 ? "99+":jobsNotification})</button>

      <button>Message ({messageNotification >= 100 ? "99+":messageNotification})</button>

      <button>Notification ({notification >= 100 ? "99+":notification})</button>

      <button  onClick={()=>{
        setMessageCount(messageCount+1)
      }}> update Message Count</button>

      <button onClick={()=>{
        setjobs(e => e+1)
      }}> Update Jobs Count</button>

      <button>All Counts ({total})</button>
    </>
  )
}

export default App
