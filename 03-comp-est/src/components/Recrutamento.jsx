import React, { useState } from 'react'

function Recrutamento() {
    const [resultado, setResultado] = useState()

    function testarRecrutamento(){
        let sabeNadar = confirm("Sabe nadar? (OK para Sim, Cancelar para Não)")
        let idade = Number(prompt("Qual a sua idade? "))
        let temRecomendacao = confirm("Tem carta de recomendação? (OK para Sim, Cancelar para Não)")

        if(sabeNadar && idade > 16){
            setResultado("Aprovado para o navio!")
        } else if(!sabeNadar && temRecomendacao && idade >= 14){
            setResultado("Aprovado sob recomendação. Monitorar nas primeiras viagens.")
        } else {
            setResultado("Reprovado. Volte quando estiver mais preparado para o mar.")
        }
    }

    return (
        <div className="ganso">
            <h3>Capitão Ganso</h3>
            <button onClick={testarRecrutamento}>Ganso - teste de recrutamento</button>
            {resultado}
        </div>
    )
}

export default Recrutamento