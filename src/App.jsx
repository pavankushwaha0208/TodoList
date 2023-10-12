import React from 'react'
import Todos from './Component/Todos'
import AddTodo from './Component/AddTodo'

const App = () => {
  return (
    <div className=' w-full h-screen bg-slate-500'>
      <h1>TodoList</h1>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App
