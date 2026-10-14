import React from 'react'

function Sarumano() {
    const [resultado, setResultado] = React.useState()
  function testarFumaca(){
    let criancas = confirm("Tem criancas por perto? (OK para Sim, Cancelar para Não)") 
    let velocidadeDoVento = Number(prompt("Qual a velocidade do vento?"))

   
    if (velocidadeDoVento > 0.5 && criancas == false) {
        setResultado("ligar a maquina de fumaça com cuidado")
    }else if (velocidadeDoVento > 1) {
        setResultado("Não ligar a maquina de fumaça")
    }
  }

  return (
<div className="Sarumano">
    <h3>Sarumano</h3>
    <button onClick={testarFumaca}>Fumaça</button>
    {resultado}
</div>
  )
}

export default Sarumano