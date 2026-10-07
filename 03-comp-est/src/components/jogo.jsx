//rfce

import { useState } from "react"

function Jogo() {
    const[resultado, setResultado] = useState()


function classificar(){
     let pontos = Number(prompt("quantos pontos"))
    if (pontos <= 10){
        setResultado("Deu ruim")
   // }else if (pontos >10 && pontos <= 100){
    }else if (pontos <= 100){
        setResultado("continue ta quase")
    }else if (pontos <= 200){
        setResultado("supimpa")
    }else{
        setResultado(" ai tu veio")
    }
}


  return (
    <div className="Jogo">
        <h2>Jogo do juca</h2>

           <button onClick={classificar}>Classificar</button>
             {resultado}
    </div>
  )

}
export default Jogo