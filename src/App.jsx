import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Root from './Root'
import Projects from './Components/Projects/Projects'


function App() {
  return (
    <div className=' dark:bg-black dark:text-white tracking-custom'>
         <Routes>
        <Route path="/" element={<Root/>}/>
        <Route path="/project" element={<Projects/>}/>
      </Routes>
    </div>
  )
}

export default App
