
import './App.css'
import { RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil';
import { todosAtomFamily } from './atoms';
import { useEffect } from 'react';

function App() {
  return <RecoilRoot>
    
    <Todo id={1}/>
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />
    <UpdateComponent />
  </RecoilRoot>
}

function Todo({id}) {
   const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  )
}

function UpdateComponent (){

  const update = useSetRecoilState(todosAtomFamily(2))

  useEffect(()=>{

    setTimeout(()=>{
      update({
        title:"go to school",
        description:"Go to hell"
      })
    },4000)
  },[])

  return <>
  </>
}

export default App
