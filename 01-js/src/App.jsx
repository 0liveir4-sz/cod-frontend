
import './App.css'

function App() {

  function calcularDevs() {
  let devscltclt= Number(prompt("quantidade de devs CLT:"));
  let devspjpj= Number(prompt("quantidade de devs PJ:"));
  let devsestagiarios= Number(prompt("quantidade de devs estagiários:"));
  
  let totalDevs = devscltclt + devspjpj + devsestagiarios;
  alert(`o time tem ${totalDevs} desenvolvidores`);
  }

function TrocarSapatos() {
  let quantidadePares, precopar, valorTotal;
  quantidadePares = Number(prompt("quantidade de pares:"));
  precopar = Number(prompt("preço do par:"));

  valorTotal = quantidadePares * precopar;

  alert('Valor Total R$ ' + valorTotal.toFixed(2));
  
}

  function calcularpontos() {
    let vitorias = Number(prompt("quantidade de vitorias:"));
    let empates = Number(prompt("quantidade de empates:"));
    
    let pontos = vitorias * 3 + empates;
    alert('o time tem ' + pontos + ' pontos');
    console.log(pontos);
  }
  return (
    <div className="cont-App">
    <h1>javascript no react</h1>
    <h2>Exercicios</h2>
   

<button onClick={calcularDevs}>Gui portoes</button>
<button onClick={calcularpontos}>Campeonato</button>
<button onClick={TrocarSapatos}>trocas de pe pequenos</button>

    </div>

  )
}

export default App
