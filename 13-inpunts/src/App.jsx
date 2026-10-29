import { useState } from 'react'

import './App.css'
import Demo from './assets/pages/Demo'
import Home from './assets/pages/Home'
import Bc2374 from './components/Bc2374'
import Exerc0081 from './assets/pages/Exerc0081'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Exerc0081  />
      <Demo />
     <Home/>
   
      </div>
       
  )
}

export default App
