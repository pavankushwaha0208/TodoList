import React from 'react'
import Todos from './Component/Todos'
import AddTodo from './Component/AddTodo'

const App = () => {
  return (
    <div className=' w-full h-screen bg-slate-500 flex items-center  flex-col'>
      <h1 className=' text-center font-bold text-3xl mt-6'>TodoList Pavan</h1>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App
