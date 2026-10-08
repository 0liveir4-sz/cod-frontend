import { useState } from "react"

function Eleicao() {
  const [mensagem, setMensagem] = useState()
  
  function verificarVoto() {
    let idade = Number(prompt("Qual a sua idade?"))
    let resultado

    if (idade < 16) {
      resultado = "Não pode votar"
    } else if (idade <= 17 || idade > 65) {
      resultado = "Voto facultativo"
    } else {
      resultado = "Voto obrigatório"
    }

    setMensagem(resultado)
  }

  return (
    <div className="Eleicao">
      <h2>Eleições</h2>
      {/* 1: perguntar a idade */}
      {/* 2: verificar se pode votar */}
      {/* 3: mostrar resultado */}

      <button onClick={verificarVoto}>Verificar</button>

      { mensagem }
    </div>
  )
}
export default Eleicao