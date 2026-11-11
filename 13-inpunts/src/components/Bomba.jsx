import React, { useState } from 'react';

function Bomba() {
  const [linhas, setLinhas] = useState([]);

  function gerarSaida() {
    let n = Number(prompt('Digite o número N de linhas:'));
    let resultado = [];
    let num = 1;

    for (let i = 0; i < n; i++) {
      resultado.push(`${num} ${num + 1} ${num + 2} BOMBA`);
      num += 4;
    }

    setLinhas(resultado);
  }

  return (
    <div className="card">
      <h2>Bomba</h2>
      <button onClick={gerarSaida}>Gerar</button>

      <div>
        {linhas.map((linha, index) => (
          <p key={index}>{linha}</p>
        ))}
      </div>
    </div>
  );
}

export default Bomba;