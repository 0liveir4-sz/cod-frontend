import { useState } from "react"

function Pousada() {
    const [conta, setConta] = useState()
    function calcularValor(){
        let dias = Number(prompt("Quantos dias?"))
        let valorDiaria
        if(dias <= 5){
            valorDiaria = 100 
        }else if(dias <= 10){
            valorDiaria = 90
        }else {
            valorDiaria = 80
        }
        let totaBruto = dias * valorDiaria
        let descontos = totaBruto * 25/100
        let multa = 150
        let totalPagar = totaBruto - descontos + multa
        setConta (totalPagar)
    }
  return (
    <div className="Pousada">
      <h2>Airbnb</h2>
      {/* 1: perguntar quantos dias vai ficar*/}
      {/* 2: descobrir o valor da diaria */}
      {/* 3: calcular total bruto*/}
      {/* 4: calcular descontos e multas*/}
      {/* 5: calcular total pagar*/}
      {/* 6: mostrar resultado*/}
         
         <button onClick={calcularValor}>Diaria</button>



         { conta}
    </div>
  )
}

export default Pousada