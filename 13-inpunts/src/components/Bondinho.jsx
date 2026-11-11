import React, { useState } from 'react';

function Bondinho() {
  const [resultado, setResultado] = useState('');

  function verificarCapacidade() {
    let alunos = Number(prompt('Digite a quantidade de alunos (A):'));
    let monitores = Number(prompt('Digite o número de monitores (M):'));
    
    let total = alunos + monitores;

    if (total <= 50) {
      setResultado('S');
    } else {
      setResultado('N');
    }
  }

  return (
    <div className='card'>
      <h2>Bondinho</h2>
      <button onClick={verificarCapacidade}>Verificar</button>

      <p>{resultado}</p>
    </div>
  );
}

export default Bondinho;