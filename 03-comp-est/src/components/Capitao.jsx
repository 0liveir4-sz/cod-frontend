 import React, { useState } from 'react'
 
function Capitao() {
    const[resultado, setResultado] = useState()
      function calcularProvisoes(){
       let marujos = Number(prompt("Quantos marujos? "))
       let comida = Number(prompt("Quantos quilos de comida? "))
       let comidaPorMarujo = comida / marujos 
       
       if(marujos >= 10 && comidaPorMarujo >= 1.5){
      setResultado("deu bom mete marcha")
       }else{
        setResultado("deu ruim volta pra baia")
       }

      }





  return (
   <div className="ganso">
    <h3>Ganso</h3>
    <button onClick={calcularProvisoes}>Ganso - provisoes</button>
    {resultado}
   </div>
  )
}

export default Capitao