import { useState } from 'react'
import './App.css'
import Demo from './assets/pages/Demo'
import Exerc0081 from './assets/pages/Exerc0081'
import Home from './assets/pages/Home' 
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">

     <Demo />
     <Exerc0081 />
     <Home />
     
   
      </div>
       
  )
}

export default App
