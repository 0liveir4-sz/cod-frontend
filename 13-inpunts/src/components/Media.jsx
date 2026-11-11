import { useState } from "react"

function  Media() {

  const [Media, setMedia] = useState('')
 

  function calcularMedia() {
    let n1 = Number(prompt('Digite a primeira nota:'))
    let n2 = Number(prompt('Digite a segunda nota:'))
    let media = (n1 + n2) / 2
    if (media >= 7) {
      setMedia(`A média é: ${media} - Aprovado!`)
    }else {
      setMedia(`A média é: ${media} - Reprovado!`)
    }
    
  }

  return (
   
    <div className='card'> 
      <h2>Media</h2>
      <button onClick={calcularMedia}>Média</button>

      {Media}
    </div>
  )
}


export default Media