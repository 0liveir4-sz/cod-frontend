import React, { useState } from 'react'

function Bc2374() {
    const [pneu, setPneu] = useState ("")
    const [digitada, setDigitada] = useState ("")
    const [diferenca, setDiferenca] = useState ("digita ai")
    function calcularPressao() {
        let pressao = Number(digitada) - Number(pneu)
        setDiferenca(`A diferença é ${pressao}`)

    }



  return (
    <div className='bc2374'>
     <h2>Bc2374 - Pneu</h2>
     <label htmlFor="">Pressão do Pneu</label>
     <input type="text"
             value={pneu}
             onChange={(e) => setPneu(e.target.value)}
     />
     <label htmlFor="">Pressão Desejada</label>
     <input type="text"
             value={digitada}
             onChange={(e) => setDigitada(e.target.value)}
     />
     <button onClick={calcularPressao}>Calcular </button>
     {diferenca}
    </div>
  )
}

export default Bc2374