import React, { useState } from 'react'

function PesoIdade() {
    const[Peso, setPeso] = useState()
    function calcular(){
     let altura = Number(prompt("Qual a sua altura? "))
     let genero = prompt("Digite seu genero (M/F): ")
     if(genero === "F"){
        setPeso("seu peso ideal é: " + ((62.1 * altura)- 44.7).toFixed(2) + "KG")
     }else if(genero === "M"){
        setPeso("seu peso ideal é: " + ((72.7 * altura)- 58).toFixed(2) + "KG")
     }else{
        setPeso("Letra invalida!")
     }
    }   

          
  return (
    <div className='Peso'>
     <h2>Pesar</h2>
      <button onClick={calcular}>Ver peso ideal</button>
       <p>{Peso}</p>
    </div>
  )

}
export default PesoIdade