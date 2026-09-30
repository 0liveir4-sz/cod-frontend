import { useState } from 'react'
import './App.css'

function App() {
  const [saida, setSaida] = useState(0)

   function rolarD6(){
    let n = Math.ceil(Math.random()*6)
     setSaida(n)
   }

   function rolarD8(){
      let n = Math.ceil(Math.random()*8)
       setSaida(n)
   }

   function rolarD12(){
    let n = Math.ceil(Math.random()*12)
     setSaida(n)
   }

   function rolarD20(){
   let n = Math.ceil(Math.random()*20)
     setSaida (n)

   }

   function rolarD100(){
    let n = Math.ceil(Math.random()*100)
     setSaida(n)
   }

   function validarSenha(){
    let Senha = prompt("Digite sua senha")
    if(Senha == "1234"){
     setSaida("acesso permitido")
    }else{
      setSaida('acesso negado')
    }
   }

   function AjudarJuca(){
    let A = Number(prompt("Digite seu 1 numero"))
    let B = Number(prompt("Digite seu 2 numero"))
    if (A > B) {
      setSaida ("o maior numero é " + A)
    }else{
      setSaida("o maior numero é " + B)
    }
   }
  
  
  function calcularMedia(){
    let nota1 = Number(prompt("Nota 1"))
    let nota2 = Number(prompt("Nota 2"))
    let media = (nota1 + nota2) / 2
      setSaida (media)
   }


  return (
 <div className="app">
    <h1>Estados!</h1>
       <button onClick={AjudarJuca}>Juca</button>
      <button onClick={calcularMedia}>Media</button>
      <button onClick={rolarD6}>D6</button>
      <button onClick={rolarD8}>D8</button>
      <button onClick={rolarD12}>D12</button>
      <button onClick={rolarD20}>D20</button>
      <button onClick={rolarD100}>D100</button>
       <button onClick={validarSenha}>Senha</button>
     <p>
      Resultado : {saida}
     </p>

  </div>
  )
}

export default App
