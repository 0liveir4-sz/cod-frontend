import React, { useState } from 'react'

function Demo() {
    const [Inpuntnota1, setInpuntNota1] = useState('')
    const [Inpuntnota2, setInpuntNota2] = useState('')
    const [resultado, setResultado] = useState('Digite as notas e clique em calcular')
     function calcularMedia() {
        let n1 = Number (Inpuntnota1)
        let n2 = Number (Inpuntnota2)
        let media =(n1 + n2) / 2
        // alert(`A média é: ${media}`)
        setResultado(`A média é: ${media}`)
     }
  return (
    <div className="demo">
      <h1>Demo - médias</h1>
         <label htmlFor="">Nota 1</label>

      <input type="text"  
        value={Inpuntnota1}
        onChange={(e) => setInpuntNota1(e.target.value)}
      />
      {Inpuntnota1}

      <label htmlFor="">Nota 2</label>
      <input type="text"
        value={Inpuntnota2}
        onChange={(e) => setInpuntNota2(e.target.value)}
        
      />
      {Inpuntnota2}
      <button onClick={calcularMedia}>Clcular</button>
      <p>
        {resultado}
      </p>
    </div>
  )
}

export default Demo