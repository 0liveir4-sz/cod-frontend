import { useState } from 'react'

import './App.css'
import Demo from './assets/pages/Demo'
import Home from './assets/pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Demo />
     <Home/>
   
      </div>
       
  )
}

export default App
